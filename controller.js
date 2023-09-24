function layThonTinTuForm() {
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var matKhau = document.getElementById("txtPass").value;
  var email = document.getElementById("txtEmail").value;
  var toan = document.getElementById("txtDiemToan").value;
  var ly = document.getElementById("txtDiemLy").value;
  var hoa = document.getElementById("txtDiemHoa").value;
  var sv = {
    ma: ma,
    ten: ten,
    matKhau: matKhau,
    email: email,
    toan: toan,
    ly: ly,
    hoa: hoa,
    tinhDTB: function () {
      var dtb = (this.toan + this.ly + this.hoa) / 4;
      return dtb;
    },
  };
  return sv;
}
function renderDSSV(dssv) {
  var contentHTML = "";
  for (var index = 0; index < dssv.length; index++) {
    var sv = dssv[index];
    var trString = ` <tr>
                          <td>${sv.ma}</td>
                          <td>${sv.ten}</td>
                          <td>${sv.email}</td>
                          <td>0</td>
                          <td>
                              <button onClick="xoaSV('${sv.ma}')" class='btn btn-danger'>Xóa</button>
                              <button onclick="suaSV('${sv.ma}')" class='btn btn-warning'>Sửa</button>
                          </td>
                    </tr>`;

    contentHTML = contentHTML + trString;
  }
  document.querySelector("#tbodySinhVien").innerHTML = contentHTML;
}

