export default function HideForm() {
  const challengeForm = document.getElementById("challengeForm");
  const showForm = document.getElementById("show-form-btn");
  const cards = document.getElementById("cards");
  const footer = document.getElementById("footer");
  if (challengeForm && showForm && cards && footer) {
    if (
      challengeForm.style.display === "none" ||
      challengeForm.style.display === ""
    ) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      challengeForm.style.display = "block";
      showForm.style.display = "none";
      cards.style.display = "none";
      footer.style.display = "none";
    } else {
      challengeForm.style.display = "none";
      showForm.style.display = "block";
      cards.style.display = "block";
      footer.style.display = "block";
    }
  }
}
