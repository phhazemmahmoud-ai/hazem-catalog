// بيانات الاتصال بمشروع Firebase بتاع صيدلية الحازم
const firebaseConfig = {
  apiKey: "AIzaSyBEk1bR_ZZy9v9yNA7gRVi_tagLsuDhVBU",
  authDomain: "hazem-catalog.firebaseapp.com",
  databaseURL: "https://hazem-catalog-default-rtdb.firebaseio.com",
  projectId: "hazem-catalog",
  storageBucket: "hazem-catalog.firebasestorage.app",
  messagingSenderId: "257417760238",
  appId: "1:257417760238:web:1bb6b2f7c4c72f68f2d2ff"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();

// بيانات رفع الصور على Cloudinary (مجاني، من غير بطاقة)
const CLOUDINARY_CLOUD_NAME = "teewpyyl";
const CLOUDINARY_UPLOAD_PRESET = "hazem_products";

// ملحوظة: الأقسام بقت متخزنة في قاعدة البيانات نفسها (تتعدل من لوحة التحكم مباشرة)
const WHATSAPP_NUMBER = "20xxxxxxxxxx"; // غيّروا الرقم ده برقم واتساب الصيدلية
