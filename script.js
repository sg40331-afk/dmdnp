/* 대명DnP 랜딩페이지 — 동작 스크립트 */

// FAQ: 하나를 열면 나머지는 자동으로 닫힘
document.querySelectorAll('details').forEach(function (d) {
  d.addEventListener('toggle', function () {
    if (!d.open) return;
    document.querySelectorAll('details').forEach(function (o) {
      if (o !== d) o.open = false;
    });
  });
});
