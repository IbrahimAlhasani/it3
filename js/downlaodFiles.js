let HTMLAL = `
  <h1 class="subject-title">محاضرات د. أكرم الحمادي</h1>
  <div class="file-item">
        
        <p class="lecture-name">المحاضرة الأولى</p>
        <a href="files/Ali Hider/محاضرات/lecture 1 ch1.pdf" download><button class="download-button"> <img
              src="icons/download.png" class="download-icon">تنزيل</button> </a>
      </div>
  <div class="file-item">
        
        <p class="lecture-name">المحاضرة الثانية</p>
        <a href="files/Ali Hider/محاضرات/lecture 2 ch1.pdf" download><button class="download-button"> <img
              src="icons/download.png" class="download-icon">تنزيل</button> </a>
      </div>
  <div class="file-item">
        
        <p class="lecture-name">المحاضرة الثالثة</p>
        <a href="files/Ali Hider/محاضرات/lecture 3 ch2.pdf" download><button class="download-button"> <img
              src="icons/download.png" class="download-icon">تنزيل</button> </a>
      </div>
  <div class="file-item">
        
        <p class="lecture-name">المحاضرة الرابعة</p>
        <a href="files/Ali Hider/محاضرات/lecture 4 and 5 ch3.pdf" download><button class="download-button"> <img
              src="icons/download.png" class="download-icon">تنزيل</button> </a>
      </div>
  <div class="file-item">
        
        <p class="lecture-name">المحاضرة الخامسة</p>
        <a href="files/Ali Hider/محاضرات/lecture 6 ch4.pdf" download><button class="download-button"> <img
              src="icons/download.png" class="download-icon">تنزيل</button> </a>
      </div>
  <div class="file-item">
        
        <p class="lecture-name">المحاضرة السادسة</p>
        <a href="files/Ali Hider/محاضرات/lecture 7 ch5.pdf" download><button class="download-button"> <img
              src="icons/download.png" class="download-icon">تنزيل</button> </a>
      </div>

        

`;


document.querySelector('.lectures').addEventListener('click', () => {
  document.querySelector('.content').innerHTML = HTMLAL;
});
// =====

let HTMLAS = `
  <h1 class="subject-title">ملخصات د. أكرم الحمادي</h1>
  <div class="file-item">
        
        <p class="lecture-name"> ملخص المحاضرة الأولى</p>
        <a href="files/Ali Hider/ملخصات/د. أكرم ملخص المحاضرة الأولى.pdf" download><button class="download-button"> <img
              src="icons/download.png" class="download-icon">تنزيل</button> </a>
      </div>
  <div class="file-item">
        
        <p class="lecture-name">ملخص المحاضرة الثانية</p>
        <a href="files/Ali Hider/ملخصات/ملخص المحاضرة الثاني د. أكرم.pdf" download><button class="download-button"> <img
              src="icons/download.png" class="download-icon">تنزيل</button> </a>
      </div>
  <div class="file-item">
        
        <p class="lecture-name">ملخص المحاضرة الثالثة</p>
        <a href="files/Ali Hider/ملخصات/ملخص المحاضرة الثالث د.أكرم.pdf" download><button class="download-button"> <img
              src="icons/download.png" class="download-icon">تنزيل</button> </a>
      </div>
  <div class="file-item">
        
        <p class="lecture-name">ملخص المحاضرة الرابعة</p>
        <a href="files/Ali Hider/ملخصات/ملخص المحاضرة الرابع & الخامس د.أكرم الحادي.pdf" download><button class="download-button"> <img
              src="icons/download.png" class="download-icon">تنزيل</button> </a>
      </div>
  <div class="file-item">
        
        <p class="lecture-name"> ملخص المحاضرة الخامسة</p>
        <a href="files/Ali Hider/ملخصات/ملخص المحاضرة السادس.pdf" download><button class="download-button"> <img
              src="icons/download.png" class="download-icon">تنزيل</button> </a>
      </div>
  <div class="file-item">
        
        <p class="lecture-name">ملخص المحاضرة السادسة</p>
        <a href="files/Ali Hider/ملخصات/ملخص المحاضرة السابعة.pdf" download><button class="download-button"> <img
              src="icons/download.png" class="download-icon">تنزيل</button> </a>
      </div>

        

`;


document.querySelector('.sammary').addEventListener('click', () => {
  document.querySelector('.content').innerHTML = HTMLAS;
});
// =====

