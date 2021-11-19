import Handlebars from 'handlebars/dist/handlebars.runtime'

{
  chatInfo: [
    {chatName: 'Yandex Practicum'},
    {userName: 'Аня Краева'},
    {userText: 'А почуму бы и нет'}
  ]
}

Handlebars.registerHelper('sidebarContent', (chatInfo) => {
  const sidebarList = `
  <main class="sidebar__content sidebar-content">
  {{#each ${chatInfo}}
    <div class="sidebar-content__item">
      <span class="sidebar-content__avatar">
        {{!-- <img src="#" alt="avatar"> --}}
      </span>
      <div class="sidebar-content__preview">
        <span class="chat-name">{{chatName}}</span>
        <div class="text-preview">
          <span class="username">{{userName}:</span>
          <p class="text">{{userText}</p>  
        </div>
      </div>
    </div>
  {{/each}}
  </main>
  `
  return new Handlebars.SafeString(sidebarList);
})