//27. ভ্রমণের পরিকল্পনার একটা তালিকা নেয়ার জন্য একটা ফাংশন তৈরি কর। পরিকল্পনা না থাকলে খালি তালিকা ধরে দেখাস।
const travelPlan = (places = []) => console.log("তোর ভ্রমণ তালিকা:", places);
travelPlan();