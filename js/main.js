/**
 * Quy đổi tiền
 * 
 * Khối 1:dữ liệu được cung cấp
 * Input
 * số tiền USD
 * 
 * Khối 2:Các bước xử lý 
 * B1: Khai báo biến và gán giá trị
 * B2: soTienVn = soTienUsd * 23.5
 * Khối 3: kết quả cần đạt 
 * output
 * soTienVn
 */
function bai1() {
    var tienUsd = document.getElementById("tienViet").value;
    var tienViet = tienUsd * 23.5;
    document.getElementById("doiTien").innerHTML = "Tiền sau khi đổi là: " + tienViet + " USD";
}
/**
 * Tính diện tích chu vi hình chữ nhật
 * 
 * Khối 1:dữ liệu được cung cấp
 * Input
 * Chiều dài
 * Chiều rộng
 * Khối 2:Các bước xử lý 
 * B1: Khai báo biến và gán giá trị
 * B2: dienTich = chieuDai * chieuRong
 *     Chuvi    = (chieuDai + chieuRong) * 2 
 * Khối 3: kết quả cần đạt 
 * output
 * dienTich , chuVi
 */
function bai2() {
    var dienTich = 0;
    var chuVi = 0;
    var chieuDai = 0;
    var chieuRong = 0;
    chieuDai = document.getElementById("chieudai").value;
    chieuRong = document.getElementById("chieurong").value;
    dienTich = chieuDai * chieuRong;
    chuVi = (parseInt(chieuDai) + parseInt(chieuRong)) * 2;
    document.getElementById("dientich").innerHTML = "Diện tích hình chữ nhật là: " + dienTich + " cm";
    document.getElementById("chuvi").innerHTML = "Chu vi hình chữ nhật là: " + chuVi + " cm";
}
/**
 * Tính tổng 2 ký số
 * 
 * Khối 1:dữ liệu được cung cấp
 * Input
 * số có 2 chữ số
 * Khối 2:Các bước xử lý 
 * B1: Khai báo biến và gán giá trị
 * B2: hangDonVi = soBd % 10
 *     hangChuc  = soBd / 10
 *     tong      = hangDonVi + hangChuc
 * Khối 3: kết quả cần đạt 
 * output
 * tong
 */
function bai3() {
    var soBd = 0;
    var tong = 0;
    var hangDonVi = 0;
    var hangChuc = 0;
    soBd = document.getElementById("soBd").value;
    hangDonVi = soBd % 10;
    hangChuc = Math.floor(soBd / 10);
    tong = hangDonVi + hangChuc;
    document.getElementById("tong").innerHTML = "Tổng của 2 chữ số hàng chục và hàng đơn vị: " + tong;
}