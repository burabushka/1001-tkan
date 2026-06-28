# Tickets

## Статусы
- `Backlog` — идея есть, к работе не готова.
- `Ready` — можно брать в работу.
- `In Progress` — сейчас выполняется.
- `Review` — нужна проверка человека или партнера.
- `Blocked` — есть блокер.
- `Done` — задача завершена и проверена.

## Текущий тикет

| Поле | Значение |
|---|---|
| ID | DOC-001 |
| Название | Настроить рабочую систему проекта |
| Этап | Process |
| Статус | Review |
| Владелец | Codex |
| Ветка | `codex/docs-team-system` |
| Scope files | `AGENTS.md`, `Project_Plan.md`, `Tickets.md`, `Repo_Current_State.md`, `Known_Issues.md`, `Test_Base.md`, `docs/process/Notion_Task_System.md` |
| Не менять | `index.html`, `DESIGN.md`, `LANDING_DESIGN.md` |
| Acceptance | Документы созданы, Notion-схема описана, текущее состояние repo зафиксировано, база проверок добавлена |

## Очередь задач

| ID | Этап | Задача | Статус | Владелец | Ветка | Scope files | Acceptance |
|---|---|---|---|---|---|---|---|
| DOC-001 | Process | Настроить рабочую систему проекта | Review | Codex | `codex/docs-team-system` | Документы процесса | Есть комплект docs для repo + Notion |
| DES-001 | Design | Привести палитру и шрифты прототипа к `DESIGN.md` | Ready | TBD | `codex/design-brand-alignment` | `index.html`, `Repo_Current_State.md`, `Test_Base.md` | Убраны Furniture-цвета как основа, display-шрифт заменен на Literata |
| UX-001 | UX | Проверить hero, CTA, форму и FAQ | Backlog | TBD | `codex/ux-main-flow` | `index.html`, `Test_Base.md`, `Known_Issues.md` | Основной путь ведет к заявке/каталогу, FAQ и tabs работают |
| CNT-001 | Content | Собрать реальные доказательства и заменить заглушки | Backlog | TBD | `codex/content-proof-assets` | `index.html`, контент-доки | Есть реальные фото/адреса/документы/отзывы или список недостающих материалов |
| QA-001 | QA | Провести ручную проверку качества | Backlog | TBD | `codex/qa-static-html` | `Test_Base.md`, `Known_Issues.md` | Проверены desktop/mobile, интерактив, доступность |
| REV-001 | Review | Провести ревью спринта с партнером | Backlog | TBD | `codex/review-sprint-1` | `Project_Plan.md`, `Tickets.md`, `Known_Issues.md` | Зафиксированы решения и следующий спринт |

## Правило обновления
В конце каждой задачи обновлять статус текущего тикета и следующий шаг.
