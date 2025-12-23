// 1. Định nghĩa lớp Học Sinh
class HocSinh {
    constructor(maHS, hoTen, lopHoc, diemTB, hanhKiem) {
        this.maHS = maHS;
        this.hoTen = hoTen;
        this.lopHoc = lopHoc;
        this.diemTB = diemTB;
        this.hanhKiem = hanhKiem;
    }
}

// 2. Mảng danh sách học sinh
let danhSach = [];

// 3. Thêm học sinh mới vào danh sách
function themHocSinh(maHS, hoTen, lopHoc, diemTB, hanhKiem) {
    const hocSinhMoi = new HocSinh(maHS, hoTen, lopHoc, diemTB, hanhKiem);
    danhSach.push(hocSinhMoi);
    console.log(`Đã thêm học sinh: ${hoTen}`);
}

// 4. Tìm học sinh theo mã học sinh
function timHocSinh(maHS) {
    const hocSinh = danhSach.find(hs => hs.maHS === maHS);
    if (hocSinh) {
        console.log(`Học sinh tìm thấy: ${hocSinh.hoTen}`);
        return hocSinh;
    } else {
        console.log("Không tìm thấy học sinh với mã số này.");
        return null;
    }
}

// 5. Cập nhật thông tin học sinh
function capNhatHocSinh(maHS, diemTB, hanhKiem) {
    const hocSinh = timHocSinh(maHS);
    if (hocSinh) {
        hocSinh.diemTB = diemTB;
        hocSinh.hanhKiem = hanhKiem;
        console.log(`Cập nhật thông tin học sinh: ${hocSinh.hoTen}`);
    }
}

// 6. Phân loại học sinh theo điểm trung bình
function xepLoaiHocSinh(diemTB) {
    if (diemTB >= 9.0) {
        return "Xuất sắc";
    } else if (diemTB >= 8.0) {
        return "Giỏi";
    } else if (diemTB >= 6.5) {
        return "Khá";
    } else {
        return "Trung bình";
    }
}

// 7. Hiển thị danh sách học sinh
function hienThiDanhSachHocSinh() {
    console.log("Danh sách học sinh:");
    danhSach.forEach(hocSinh => {
        console.log(`${hocSinh.maHS} - ${hocSinh.hoTen} - Lớp: ${hocSinh.lopHoc} - Điểm TB: ${hocSinh.diemTB} - Hạnh kiểm: ${hocSinh.hanhKiem}`);
    });
}

// 8. Ví dụ sử dụng
// Thêm một số học sinh
themHocSinh("01", "Nguyễn Văn A", "10A1", 9.5, "Tốt");
themHocSinh("02", "Trần Thị B", "10A1", 6.0, "Khá");

// Tìm học sinh theo mã
timHocSinh("01");

// Cập nhật học sinh
capNhatHocSinh("02", 7.5, "Tốt");

// Tìm lại học sinh sau khi cập nhật
timHocSinh("02");

// Hiển thị danh sách học sinh
hienThiDanhSachHocSinh();
