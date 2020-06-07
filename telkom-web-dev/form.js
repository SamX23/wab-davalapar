// alert("Form.js detected!");
function previewImage() {
  let ofReader = new FileReader();
  ofReader.readAsDataURL(document.getElementById("foto").files[0]);

  ofReader.onload = function (oFREvent) {
    document.getElementById("fotopreview").src = oFREvent.target.result;
  };
};

$(function () {
  $("#formdaftar").submit(function () {
    let nama = $("#nama").val();
    let telpon = $("#telpon").val();
    let email = $("#email").val();
    let alamat = $("#alamat").val();
    let jnskelamin = $("input[name='jnskelamin']:checked").val();
    let foto = $("#foto").val();
    let program = [];
    let me = this;
    $.each($("input[name='program']:checked"), function () {
      program.push($(me).val());
    });

    let pengalaman = $('$pengalaman').val();
    let output = "Nama = " + nama + "<br>";
    output += "Telpon = " + telpon + "<br>";
    output += 'Email = ' + email + "<br>";
    output += 'Alamat = ' + alamat + "<br>";
    output += 'Jenis Kelamin = ' + jnskelamin + "<br>";
    output += "Foto = <img width='100' height='100' id='fotopreview'><br>";
    output += 'Program = ' + program + "<br>";
    output += 'Pengalaman = ' + pengalaman + "<br>";

    $("#formdaftar").after(output);
    previewImage();
    return false;
  });
});