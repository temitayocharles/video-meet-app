const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// Function to clean up files when a message is created in Firestore
exports.cleanUpFiles = functions.firestore
    .document("messages/{messageId}")
    .onCreate(async (snap, context) => {
      const messageData = snap.data();
      const fileUrl = messageData?.fileUrl;

      if (fileUrl) {
      // Get the storage bucket reference
        const bucket = admin.storage().bucket();

        try {
        // Extract the file path from the URL
          const filePath = fileUrl.split("/o/")[1].split("?")[0];

          // Reference the file in Firebase Storage
          const file = bucket.file(filePath);

          // Delete the file from Firebase Storage
          await file.delete();
          console.log(`File at ${fileUrl} has been deleted.`);
        } catch (error) {
          console.error("Error deleting file:", error);
        }
      }

      return null; // Return a promise to indicate the function is complete
    });
