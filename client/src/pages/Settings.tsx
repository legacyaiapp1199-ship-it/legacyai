import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { toast } from "sonner";
import { Camera } from "lucide-react";

export default function Settings() {
  const { user: currentUser, isAuthenticated } = useAuth();
  const [, navigate] = useLocation();
  const [name, setName] = useState(currentUser?.name || "");
  const [bio, setBio] = useState(currentUser?.bio || "");
  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState(currentUser?.avatar);
  const [coverPhoto, setCoverPhoto] = useState<File | null>(null);

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

  const handleCoverPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverPhoto(file);
    }
  };

  const handleSaveProfile = async () => {
    try {
      if (avatar) {
        const buffer = await avatar.arrayBuffer();
        await uploadAvatarMutation.mutateAsync({
          fileBuffer: new Uint8Array(buffer) as any,
        });
      }

      await updateProfileMutation.mutateAsync({
        name,
        bio,
      });

      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-8 text-3xl font-bold text-foreground">Settings</h1>

          {/* Profile Settings */}
          <div className="card-elevated p-6">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">
              Profile Settings
            </h2>

            <div className="space-y-6">
              {/* Avatar */}
              <div>
                <label className="mb-4 block text-sm font-medium text-foreground">
                  Profile Picture
                </label>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={avatarPreview || undefined} />
                    <AvatarFallback className="bg-accent text-accent-foreground">
                      {currentUser?.name?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <label className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarChange}
                      className="hidden"
                      id="settings-avatar-input"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() =>
                        (document.getElementById('settings-avatar-input') as HTMLInputElement)?.click()
                      }
                    >
                      <Camera className="mr-2 h-4 w-4" />
                      Change Photo
                    </Button>
                  </label>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Full Name
                </label>
                <Input
                  type="text"
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
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="input-elegant resize-none"
                  rows={4}
                />
              </div>

              {/* Save Button */}
              <Button
                onClick={handleSaveProfile}
                disabled={updateProfileMutation.isPending}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {updateProfileMutation.isPending ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="card-elevated mt-6 p-6">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">
              Privacy & Security
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">
                    Private Account
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Control who can see your posts
                  </p>
                </div>
                <Button variant="outline">Coming Soon</Button>
              </div>

              <div className="flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="font-medium text-foreground">
                    Two-Factor Authentication
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security
                  </p>
                </div>
                <Button variant="outline">Coming Soon</Button>
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="card-elevated mt-6 p-6">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">
              Account
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">
                    {currentUser?.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="font-medium text-foreground">
                    Delete Account
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Permanently delete your account
                  </p>
                </div>
                <Button variant="outline" className="text-destructive">
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
