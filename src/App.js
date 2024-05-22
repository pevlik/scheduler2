import React, { useState } from "react";
import { Scheduler } from "@aldabil/react-scheduler";
import { ru } from "date-fns/locale";

const events = [
  {
    event_id: 1,
    title: "Event 1",
    start: new Date("2023-05-20T09:00:00"),
    end: new Date("2023-05-20T10:00:00"),
  },
  {
    event_id: 2,
    title: "Event 2",
    start: new Date("2023-05-21T12:00:00"),
    end: new Date("2023-05-21T13:00:00"),
  },
];

function App() {
  const [schedulerEvents, setSchedulerEvents] = useState(events);

  const handleEventAdd = (event) => {
    setSchedulerEvents([...schedulerEvents, event]);
  };

  const handleEventDelete = (eventId) => {
    setSchedulerEvents(schedulerEvents.filter(event => event.event_id !== eventId));
  };

  return (
    <Scheduler
      events={schedulerEvents}
      locale={ru}
      hourFormat="24"
      day={{
        startHour: 7,
        endHour: 23,
        step: 60,
        navigation: true,
      }}
      week={{
        weekDays: [0, 1, 2, 3, 4, 5],
        weekStartOn: 6,
        startHour: 7,
        endHour: 23,
        step: 60,
        navigation: true,
        disableGoToDay: false,
      }}
      translations={{
        navigation: {
          month: "Месяц",
          week: "Неделя",
          day: "День",
          today: "Сегодня",
          agenda: "Список",
        },
        form: {
          addTitle: "Добавить событие",
          editTitle: "Редактировать событие",
          confirm: "Подтвердить",
          delete: "Удалить",
          cancel: "Отмена",
        },
        event: {
          title: "Событие",
          start: "Начало",
          end: "Конец",
          allDay: "Весь день",
        },
        validation: {
          required: "*Обязательно для заполнения",
          invalidEmail: "Неверный Email",
          onlyNumbers: "Использовать только цифры",
          min: "Минимум 3 символа",
          max: "Максимум {{max}} символов",
        },
        moreEvents: "Еще...",
        noDataToDisplay: "Нет событий",
        loading: "Загрузка",
      }}
      onEventAdd={handleEventAdd}
      onEventDelete={handleEventDelete}
    />
  );
}

export default App;
