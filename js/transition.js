document.querySelectorAll("a[href]").forEach(link => {
  const href = link.getAttribute("href");

  if (
    href &&
    !href.startsWith("#") &&
    !href.startsWith("http") &&
    !link.hasAttribute("target")
  ) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const page = document.querySelector(".page");
      page.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  }
});
/* ===== CLB SWITCH LOGIC ===== */
const currentPage = window.location.pathname.split("/").pop();

const clbLinks = {
  "thethao.html": [
    { name: "CLB Thiện Nguyện", link: "thiennguyen.html" },
    { name: "CLB Truyền Thông", link: "truyenthong.html" }
  ],
  "thiennguyen.html": [
    { name: "CLB Thể Thao", link: "thethao.html" },
    { name: "CLB Truyền Thông", link: "truyenthong.html" }
  ],
  "truyenthong.html": [
    { name: "CLB Thể Thao", link: "thethao.html" },
    { name: "CLB Thiện Nguyện", link: "thiennguyen.html" }
  ]
};

const optionsBox = document.querySelector(".clb-options");

if (optionsBox && clbLinks[currentPage]) {
  optionsBox.innerHTML = "";

  clbLinks[currentPage].forEach(item => {
    const a = document.createElement("a");
    a.href = item.link;
    a.textContent = item.name;
    optionsBox.appendChild(a);
  });
}

const toggleBtn = document.getElementById("toggleCLB");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    optionsBox.classList.toggle("show");
  });
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".clb-dropdown")) {
    optionsBox?.classList.remove("show");
  }
});
