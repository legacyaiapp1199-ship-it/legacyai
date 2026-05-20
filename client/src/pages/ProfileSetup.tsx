import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { Camera, ArrowRight } from "lucide-react";

export default function ProfileSetup() {
  const [, navigate] = useLocation();
  const { user, isAuthenticated } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [bio, setBio] = useState(user?.bio || "");
  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState(user?.avatar);

  const updateProfileMutation = trpc.user.updateProfile.useMutation();
  const uploadAvatarMutation = trpc.user.uploadAvatar.useMutation();

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    try {
      // Upload avatar if changed
      if (avatar) {
        const buffer = await avatar.arrayBuffer();
        await uploadAvatarMutation.mutateAsync({
          fileBuffer: new Uint8Array(buffer) as any,
        });
      }

      // Update profile
      await updateProfileMutation.mutateAsync({
        name,
        bio,
      });

      toast.success("Profile updated successfully!");
      navigate("/feed");
    } catch (error) {
      toast.error("Failed to update profile");
      console.error(error);
    }
  };

  const isLoading = updateProfileMutation.isPending || uploadAvatarMutation.isPending;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-background/80 blur-backdrop">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-gradient">LegacyAI</div>
        </div>
      </nav>

      {/* Profile Setup Form */}
      <div className="container flex items-center justify-center py-20">
        <div className="w-full max-w-md">
          <div className="card-elevated p-8 sm:p-10">
            <h1 className="mb-2 text-3xl font-bold text-foreground">
              Complete Your Profile
            </h1>
            <p className="mb-8 text-muted-foreground">
              Let others know who you are and what you're about
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Avatar Upload */}
              <div className="flex flex-col items-center gap-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={avatarPreview || undefined} />
                  <AvatarFallback className="bg-accent text-accent-foreground text-lg">
                    {name.charAt(0).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
                <label className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarChange}
                      className="hidden"
                      id="profile-setup-avatar-input"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        (document.getElementById('profile-setup-avatar-input') as HTMLInputElement)?.click()
                      }
                  >
                    <Camera className="mr-2 h-4 w-4" />
                    Upload Photo
                  </Button>
                </label>
              </div>

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Full Name
                </label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-elegant"
                />
              </div>

              {/* Bio */}
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Bio
                </label>
                <Textarea
                  placeholder="Tell us about yourself..."
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="input-elegant resize-none"
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {isLoading ? (
                  <>
                    <Spinner className="mr-2 h-4 w-4" />
                    Saving...
                  </>
                ) : (
                  <>
                    Continue <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>

              {/* Skip Link */}
              <button
                type="button"
                onClick={() => navigate("/feed")}
                className="w-full text-center text-sm text-muted-foreground hover:text-foreground"
              >
                Skip for now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
