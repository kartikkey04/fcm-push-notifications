importScripts("https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/10.10.0/firebase-messaging.js")

const firebaseConfig = {
    apiKey: "AIzaSyAHC1aJ_dwv4VB0OMA7rywWt2M-D7m_piw",
    authDomain: "fcm-push-notification-77134.firebaseapp.com",
    projectId: "fcm-push-notification-77134",
    storageBucket: "fcm-push-notification-77134.firebasestorage.app",
    messagingSenderId: "216218447590",
    appId: "1:216218447590:web:2698caf777dff57dbad527",
    measurementId: "G-6RCR6C72HY"
}

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackground((payload) => {
    console.log("Background message received", payload);
    self.ServiceWorkerRegistration.showNotification(payload.notification.title,{
        body: payload.notification.body,
        icon: payload.notification.icon,
    });
});

