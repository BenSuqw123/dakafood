let ttslide = 0;

window.onscroll = function() {
  var scrollButton = document.querySelector('.btn-scrolltop');
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showLoginForm() {
  $('.bangdangki').removeClass('show');
  $('.bangdangnhap').addClass('show');
}



window.onload = function() {
  let users = {};

  $('#submit1').on('click', function() {
    var ten = document.getElementById('name1').value;
    var password = document.getElementById('matkhaudk1').value;
    var confirmPassword = document.getElementById('matkhaudk2').value;
    var area = document.getElementById('area').value;
    const selectBox = document.getElementById('region');
    const optionValues = Array.from(selectBox.options).map(option => option.value.toLowerCase());
    console.log(optionValues)
    if (!ten || !password || !confirmPassword || !area) {
      alert('Vui lòng điền đầy đủ thông tin!')
    }
    else if (password !== confirmPassword) {
      alert('Mật khẩu không khớp!');
      return;
    }
    else if (!optionValues.includes(area.toLowerCase())) {
      alert('Địa điểm không có trong danh sách');
      selectBox.value = area;
    }
    else if (users[ten]) {
      alert('Người dùng đã tồn tại!');
    }
    else {
      users[ten] = { password: password };
      alert('Đăng ký thành công!');
      showLoginForm();
      console.log(users);
    }

  });
  $('#submit').on('click', function() {
    var ten = document.getElementById('name').value;
    var password = document.getElementById('matkhau').value;
    var area = document.getElementById('area').value;
    if (users[ten] && users[ten].password === password) {
      alert('Đăng nhập thành công!');
      $('.bangdangki').removeClass('show');
      $('.bangdangnhap').removeClass('show');
      $('.login').addClass('hidden');
      $('.changeLogin').removeClass('hidden');

      console.log(area);
      $('#region option').each(function() {

        var optionVal = $(this).val();      
        var lowercased = optionVal.toLowerCase();
        $(this).val(lowercased);
        console.log(this);
        });
      $('#region').val(area);


      $('#username').text(`hi ${ten}`);
      $('#tenuser').text(`Tên: ${ten}`);   
      $('#diachiuser').text(`Địa Chỉ: ${area}`);   


      $('.changeLogin').on('click', function(event) {
        event.stopPropagation();
        $('.information').removeClass('hidden');
      });
      $(window).on('click', function() {
        $('.information').addClass('hidden');


      });
      $('.information').on('click', function(event) {
        event.stopPropagation();
      });

    }
    else {
      alert('tên đăng nhập hoặc mật khẩu không chính xác!')
    }
  });


  $('#dangnhap').on('click', function() {
    $('.bangdangnhap').addClass('show');
  });

  $('#signup').on('click', function() {
    $('.bangdangki').addClass('show');
    $('.bangdangnhap').addClass('show');

  });

  $('#login').on('click', function() {
    $('.bangdangnhap').addClass('show');
    $('.bangdangki').removeClass('show');
  });






  $('#close').on('click', function() {
    $('.bangdangnhap').removeClass('show');
    $('.bangdangki').removeClass('show');

  });
  $('#close2').on('click', function() {
    $('.bangdangki').removeClass('show');
    $('.bangdangnhap').removeClass('show');
  });
  $('#openSlide').on('click', function(){
    $('.congcu').addClass('show');
    console.log(3)
  });
  $('#closeSlide').on('click', function(){
    $('.congcu').removeClass('show');
  });
  $('#dsmonno').on('change', function() {
      var allOptions = $('#dsmonno option').map(function() {
          return $(this).val();
      }).get();

   
      var selectedValue = $(this).val();

      if (selectedValue !== 'All') {
          $('.monno').each(function() {
              if ($(this).hasClass(selectedValue)) {
                  $(this).removeClass('hidden');
              } else {
                  $(this).addClass('hidden');
              }
          });
      } else {
          $('.monno').removeClass('hidden');
      }
  });
  
}