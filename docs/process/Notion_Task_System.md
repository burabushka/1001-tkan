# Notion Task System

## Цель
Notion нужен как рабочая доска для команды: видеть этапы, задачи, ответственных, сроки и блокеры.

Repo остается источником истины для архитектуры, правил, статусов после закрытия задач и важных решений.

## База данных: Project Tasks

Создать Notion database с такими полями:

| Поле | Тип | Что писать |
|---|---|---|
| Task | Title | Короткое название задачи |
| ID | Text | `DOC-001`, `DES-001`, `UX-001` |
| Stage | Select | `Process`, `Design`, `UX`, `Content`, `QA`, `Review` |
| Status | Select | `Backlog`, `Ready`, `In Progress`, `Review`, `Blocked`, `Done` |
| Owner | Person | Ответственный человек |
| Priority | Select | `P0`, `P1`, `P2` |
| Start | Date | Дата старта |
| Due | Date | Дата дедлайна |
| Branch | Text | Git-ветка, например `codex/docs-team-system` |
| Scope Files | Text | Какие файлы можно менять |
| Acceptance | Text | Как понять, что задача готова |
| Repo Notes | Text | Ссылка/указание на файл repo с решением |

## Статусы
- `Backlog` — задача есть, но еще не готова к работе.
- `Ready` — все понятно, можно брать.
- `In Progress` — задача в работе.
- `Review` — нужен просмотр человека или партнера.
- `Blocked` — есть блокер, в задаче написано какой.
- `Done` — задача проверена и закрыта.

## Views
- `Timeline` — группировка по датам `Start` / `Due`.
- `Kanban by Status` — доска по статусам.
- `My Tasks` — фильтр по `Owner`.
- `Blocked` — только задачи со статусом `Blocked`.
- `Review` — только задачи со статусом `Review`.

## Начальные задачи для переноса в Notion

| ID | Task | Stage | Status | Owner | Priority | Start | Due | Branch |
|---|---|---|---|---|---|---|---|---|
| DOC-001 | Настроить рабочую систему проекта | Process | Review | Codex | P0 | 2026-06-28 | 2026-06-28 | `codex/docs-team-system` |
| DES-001 | Привести палитру и шрифты к `DESIGN.md` | Design | Ready | TBD | P0 | 2026-06-29 | 2026-06-29 | `codex/design-brand-alignment` |
| UX-001 | Проверить hero, CTA, форму и FAQ | UX | Backlog | TBD | P1 | 2026-06-30 | 2026-06-30 | `codex/ux-main-flow` |
| CNT-001 | Собрать реальные доказательства | Content | Backlog | TBD | P1 | 2026-07-01 | 2026-07-01 | `codex/content-proof-assets` |
| QA-001 | Провести ручную проверку качества | QA | Backlog | TBD | P1 | 2026-07-02 | 2026-07-02 | `codex/qa-static-html` |
| REV-001 | Провести ревью спринта | Review | Backlog | TBD | P2 | 2026-07-03 | 2026-07-03 | `codex/review-sprint-1` |

## Мини-ритуал работы
1. Утром смотреть view `Kanban by Status`.
2. Брать только задачи со статусом `Ready`.
3. Перед работой сверять `Scope Files`.
4. После работы переводить в `Review` и обновлять repo-доки.
5. После проверки переводить в `Done`.

## Правило синхронизации
Если задача закрыта в Notion, но не отражена в `Tickets.md` и `Repo_Current_State.md`, она еще не считается закрытой в проекте.

## Snapshot 2026-06-29: MECE-доска

Детальная операционная доска проекта: `1001 ткань - Project Tasks`

URL: `https://app.notion.com/p/9c287eec6a034e3c86817c4849655bc3`

### Роль доски
Repo хранит верхнеуровневые этапы, scope, правила и решения. Notion хранит детальные MECE-задачи и ручные рабочие статусы команды.

При конфликте не затирать ручные статусы Notion автоматически. Сначала сверить repo-решения и потом синхронизировать оба слоя.

### Схема базы

| Поле | Тип | Значения |
|---|---|---|
| `Name` | Title | Название MECE-задачи |
| `Status` | Select | `To Do`, `In Progress`, `Code Review`, `Done` |
| `Level` | Select | `Уровень 3 (Среда/Архитектура)`, `Уровень 1 (Спецификация)`, `Уровень 2 (Тесты/Eval)` |
| `Block` | Select | `Инфраструктура`, `UI-компоненты`, `Бизнес-логика` |
| `Acceptance Criteria` | Text | Проверяемый критерий готовности |
| `Person` | Person | Ответственный, если назначен |
| `Date` | Date | Не заполнять без явно заданной даты |

### Views
- `Kanban by Status` — board, группировка по `Status`.
- `Calendar` — calendar по `Date`.
- `Default view` — table.

### Статусы карточек

| Card | Status |
|---|---|
| Настроить файл AGENTS.md | Code Review |
| Имплементировать 12-колоночную сетку | To Do |
| Настроить SEO: Title, H1, Schema и canonical | To Do |
| Сверстать Header и Footer | To Do |
| Разработать Hero-экран по Z-паттерну | Done |
| Сверстать блоки «4 этапа работы» и «Доверие» | To Do |
| Разработать SEO-блок FAQ с аккордеонами | To Do |
| Создать квиз-калькулятор B2B | To Do |
| Разработать корзину с кросс-селлом | To Do |
| Настроить события аналитики | To Do |

### Текущие правила
- Старые базы `Task List` и `My Tasks` не использовать для этой синхронизации.
- `Date` не выставлять без явной даты.
- Не выдумывать endpoint, фото, реквизиты, счетчики аналитики, старое название для `alternateName` или реальные кейсы.
- Auto-link артефакты вокруг `AGENTS.md` исправлять так, чтобы в свойствах Notion не было URL.
