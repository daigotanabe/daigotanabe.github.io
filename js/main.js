'use strict';
{
  const open = document.getElementById('open');
  const content = document.querySelector('.content');
  const top = document.querySelector('.top');
  const topid = document.getElementById('top');
  const profile = document.querySelector('.profile');
  const profileid = document.getElementById('profile');
  const skill = document.querySelector('.skill');
  const skillid = document.getElementById('skill');
  const works = document.querySelector('.works');
  const worksid = document.getElementById('works');

  open.addEventListener('click', () => {
    content.classList.toggle('show');
  }); 

  topid.addEventListener('click', () => {
    const top_position = top.getBoundingClientRect();

    window.scrollTo( 0, top_position.top);
  });

  profileid.addEventListener('click', () => {
    const profile_position = profile.getBoundingClientRect();

    window.scrollBy( 0, profile_position.top);
  });

  skillid.addEventListener('click', () => {
    const skill_position = skill.getBoundingClientRect();

    window.scrollBy( 0, skill_position.top);
  });

  worksid.addEventListener('click', () => {
    const works_position = works.getBoundingClientRect();

    window.scrollBy( 0, works_position.top);
  });

}

