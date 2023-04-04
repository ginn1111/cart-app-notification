import { useEffect } from 'react';

const usePermission = (
  permissionName: PermissionName,
  title?: string,
  options?: NotificationOptions
) => {
  useEffect(() => {
    let notification: Notification;
    (async () => {
      try {
        const status: PermissionStatus = await navigator.permissions.query({
          name: permissionName,
        });
        if (status.state !== 'granted') {
          Notification.requestPermission();
        } else if (title) {
          notification = new Notification(title, options);
        }
      } catch (error) {}
    })();
    return () => notification?.close();
  }, [permissionName, title, options]);
};

export default usePermission;
