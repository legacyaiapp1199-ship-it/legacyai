import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { toast } from "sonner";
import { Calendar, Image as ImageIcon, Sparkles } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";

export default function CreateMemory() {
  const { user: currentUser, isAuthenticated } = useAuth();
  const [, navigate] = useLocation();
  const [memoryDate, setMemoryDate] = useState("");
  const [story, setStory] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const createMemoryMutation = trpc.memory.create.useMutation();

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImages([...images, ...files]);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreviews((prev) => [...prev, e.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
    setImagePreviews(imagePreviews.filter((_, i) => i !== index));
  };

  const handleCreateMemory = async () => {
    if (!memoryDate) {
      toast.error("Please select a date");
      return;
    }

    if (!story.trim()) {
      toast.error("Please write your memory story");
      return;
    }

    if (imagePreviews.length === 0) {
      toast.error("Please add at least one photo to your memory");
      return;
    }

    try {
      await createMemoryMutation.mutateAsync({
        content: story,
        memoryDate: new Date(memoryDate),
        story,
        images: imagePreviews,
      });

      toast.success("Memory created!");
      navigate("/feed");
    } catch (error) {
      toast.error("Failed to create memory");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">
              <Sparkles className="mr-2 inline-block h-8 w-8 text-accent" />
              Create a Memory
            </h1>
            <p className="mt-2 text-muted-foreground">
              Preserve a precious moment from your life
            </p>
          </div>

          <div className="card-elevated p-6 space-y-6">
            {/* Date Picker */}
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                When did this happen?
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="date"
                  value={memoryDate}
                  onChange={(e) => setMemoryDate(e.target.value)}
                  className="input-elegant pl-10"
                />
              </div>
            </div>

            {/* Story */}
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Your Story <span className="text-destructive">*</span>
              </label>
              <Textarea
                placeholder="Tell the story of this memory... What happened? Who was there? How did it make you feel?"
                value={story}
                onChange={(e) => setStory(e.target.value)}
                className="input-elegant resize-none"
                rows={6}
              />
              <p className="mt-2 text-xs text-muted-foreground">
                {story.length} characters
              </p>
            </div>

            {/* Image Previews */}
            {imagePreviews.length > 0 && (
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Photos
                </label>
                <div className="grid gap-2 sm:grid-cols-2">
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className="relative">
                      <img
                        src={preview}
                        alt="Preview"
                        className="h-40 w-full rounded-lg object-cover"
                      />
                      <button
                        onClick={() => handleRemoveImage(index)}
                        className="absolute right-2 top-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Image Upload - Required */}
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Photos <span className="text-destructive">*</span>
              </label>
              <label className="flex-1">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="memory-image-input"
                />
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    (document.getElementById(
                      "memory-image-input"
                    ) as HTMLInputElement)?.click()
                  }
                >
                  <ImageIcon className="mr-2 h-4 w-4" />
                  {imagePreviews.length > 0
                    ? `${imagePreviews.length} photo${imagePreviews.length > 1 ? "s" : ""} added`
                    : "Add Photos"}
                </Button>
              </label>
              <p className="mt-2 text-xs text-muted-foreground">
                At least one photo is required
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 border-t border-border pt-6">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => navigate("/feed")}
              >
                Cancel
              </Button>
              <Button
                onClick={handleCreateMemory}
                disabled={createMemoryMutation.isPending}
                className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {createMemoryMutation.isPending ? (
                  <>
                    <Spinner className="mr-2 h-4 w-4" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Create Memory
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
