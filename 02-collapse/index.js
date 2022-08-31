const collapsibleButton = document.querySelector('.collapsible__button');
const collapsibleContent = document.querySelector('.collapsible__content');
const collapsibleActionVisible = collapsibleButton.querySelector('.collapsible__action--visible');
const collapsibleActionHidden = collapsibleButton.querySelector('.collapsible__action--hidden');
collapsibleActionHidden.style.display = 'none';

const contentHidding = collapsibleContent.animate(
  { color: ["#000", "transparent"] },
  { duration: 200, fill: "forwards" }
)
contentHidding.pause();

function changeButton () {
  collapsibleActionVisible.style.display = (collapsibleActionVisible.style.display == 'none') ?
    'inline' : 'none';
  collapsibleActionHidden.style.display = (collapsibleActionHidden.style.display == 'none') ?
    'inline' : 'none';
}

function hideContent () {
  if (contentHidding.playState === "paused") {
    contentHidding.play();
  } else {
    contentHidding.reverse();
  }
  changeButton ();
}
collapsibleButton.addEventListener('click', hideContent);