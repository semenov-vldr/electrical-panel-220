// const assembly = document.querySelector("#assembly");
// if (assembly) {
//   const videoSource = assembly.querySelector(".assembly__video source");
//
//   const observer = new IntersectionObserver(loadingVideo,
//     {
//       threshold: 0.5
//     });
//
//   function loadingVideo(entry) {
//
//     console.log(videoSource.dataset.src);
//     videoSource.src = videoSource.dataset.src;
//
//
//     if (entry.isIntersecting) observer.unobserve(entry.target);
//   }
//
//   observer.observe(assembly);
// }