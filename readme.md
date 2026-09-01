# Portfolio Project Guide

คู่มือโครงสร้างโปรเจกต์และการติดตั้งใช้งานสำหรับพอร์ตโฟลิโอ React

## 📂 โครงสร้างโฟลเดอร์ (Project Structure)

```text
my-portfolio/
├── node_modules/       # (ซ่อนใน .gitignore) โฟลเดอร์เก็บไลบรารีและแพ็กเกจทั้งหมด
├── dist/               # (ซ่อนใน .gitignore) โฟลเดอร์ผลลัพธ์จากการ Build เพื่อเตรียมขึ้นเว็บจริง
├── .vite/              # (ซ่อนใน .gitignore) โฟลเดอร์แคชชั่วคราวของ Vite
├── src/                # โฟลเดอร์หลักสำหรับเขียนโค้ด React (Components ต่างๆ เช่น App.jsx, Contact.jsx)
├── .gitignore          # ไฟล์บอก Git ว่าไม่ต้องอัปโหลดโฟลเดอร์/ไฟล์ขยะขึ้น GitHub
├── index.html          # ไฟล์ HTML หลักของเว็บ
├── package.json        # ไฟล์ระบุข้อมูลโปรเจกต์และรายชื่อไลบรารีที่ใช้งาน
├── package-lock.json   # ไฟล์ล็อกเวอร์ชันที่แน่นอนของแพ็กเกจ
├── tailwind.config.js  # ไฟล์ตั้งค่า Tailwind CSS
└── vite.config.js      # ไฟล์ตั้งค่าของ Vite


