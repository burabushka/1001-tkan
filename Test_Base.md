# Test Base

## Текущий статус проверок
В рабочем дереве появился untracked Storybook/Vite/Chromatic pipeline, но статус его принятия в проект еще не зафиксирован отдельным тикетом.

Для текущего статического HTML-прототипа используются ручные проверки и проверки содержимого файлов.

## Наблюдаемые npm-команды
Команды из untracked `package.json` не использовать как доказательство качества, пока Storybook pipeline не принят отдельным тикетом:
- `npm run storybook`
- `npm run build-storybook`
- `npm run chromatic`

## DOC-001 checklist
- [x] `AGENTS.md` создан и остается коротким.
- [x] `Project_Plan.md` содержит этапы и таймлайн.
- [x] `Tickets.md` содержит текущий тикет и очередь задач.
- [x] `Repo_Current_State.md` фиксирует статический HTML, Tailwind CDN и Vanilla JS.
- [x] `Known_Issues.md` содержит найденные проблемы вне текущего тикета.
- [x] `docs/process/Notion_Task_System.md` описывает поля, статусы и views для Notion.
- [x] `index.html` не изменяется в рамках `DOC-001`.

## Ручные проверки лендинга

### Структура
- [ ] Открыть `index.html` в браузере.
- [ ] Проверить, что hero виден на первом экране.
- [ ] Проверить, что CTA ведут к заявке или каталогу.
- [ ] Проверить, что footer содержит контакты и реквизиты.

### Интерактив
- [ ] Переключить tabs: `Классическая форма` и `AI-Помощник`.
- [ ] Нажать `Подобрать через AI` и увидеть loading/result.
- [ ] Открыть и закрыть каждый FAQ accordion.
- [ ] Проверить якорные ссылки header.

### Mobile
- [ ] Проверить ширину 390px.
- [ ] Убедиться, что нет горизонтального скролла.
- [ ] Проверить, что кнопки нажимаемые и текст не налезает.
- [ ] Проверить, что формы читаемы в одну колонку.

### Accessibility
- [ ] Проверить порядок заголовков.
- [ ] Проверить наличие labels у полей формы.
- [ ] Проверить видимость focus state.
- [ ] Проверить, что интерактив доступен с клавиатуры.

## Будущие автоматические проверки
Добавить после появления frontend pipeline:
- HTML validation.
- Link check.
- Basic accessibility scan.
- Visual smoke test desktop/mobile.
- CSS/JS lint.
- Storybook smoke/build check.
- Chromatic visual review.
