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
// ملحوظة: تخزين الصور (Storage) مش مفعّل دلوقتي لأنه محتاج ترقية الخطة في Firebase.
// المنتجات هتظهر بمربع لون وحرف بدل الصورة لحد ما تفعّلوا الموضوع ده.

// نفس قائمة التصنيفات لازم تتطابق بين لوحة التحكم والموقع
const CATEGORIES = ["العناية بالبشرة", "مكياج", "العناية بالشعر", "عطور"];
const WHATSAPP_NUMBER = "20xxxxxxxxxx"; // غيّروا الرقم ده برقم واتساب الصيدلية
