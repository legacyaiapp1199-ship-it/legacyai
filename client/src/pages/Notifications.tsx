import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { Spinner } from "@/components/ui/spinner";
import { Heart, MessageCircle, Users, Sparkles } from "lucide-react";

export default function Notifications() {
  const { user: currentUser, isAuthenticated } = useAuth();
  const [, navigate] = useLocation();

  const { data: notifications, isLoading } =
    trpc.notification.getNotifications.useQuery({
      limit: 50,
      offset: 0,
    });

  const markAsReadMutation = trpc.notification.markAsRead.useMutation();

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  const handleMarkAsRead = async (notificationId: number) => {
    try {
      await markAsReadMutation.mutateAsync({ notificationId });
    } catch (error) {
      console.error(error);
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "like":
        return <Heart className="h-5 w-5 text-red-500" />;
      case "comment":
        return <MessageCircle className="h-5 w-5 text-blue-500" />;
      case "follow":
        return <Users className="h-5 w-5 text-purple-500" />;
      case "memory_reminder":
        return <Sparkles className="h-5 w-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getNotificationMessage = (notification: any) => {
    switch (notification.type) {
      case "like":
        return "liked your post";
      case "comment":
        return "commented on your post";
      case "follow":
        return "started following you";
      case "memory_reminder":
        return "memory reminder";
      default:
        return "interacted with you";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-8 text-3xl font-bold text-foreground">
            Notifications
          </h1>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <Spinner />
            </div>
          ) : notifications && notifications.length > 0 ? (
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`card-elevated p-4 transition-all ${
                    !notification.read ? "bg-accent/5" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground">
                        <span className="font-semibold">User</span>{" "}
                        {getNotificationMessage(notification)}
                      </p>
                      {notification.content && (
                        <p className="mt-1 text-sm text-muted-foreground">
                          {notification.content}
                        </p>
                      )}
                      <p className="mt-2 text-xs text-muted-foreground">
                        Just now
                      </p>
                    </div>
                    {!notification.read && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleMarkAsRead(notification.id)}
                      >
                        Mark as read
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="card-elevated p-12 text-center">
              <p className="text-muted-foreground">No notifications yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
