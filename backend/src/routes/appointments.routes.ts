import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';

import Appointment from '../models/Appointment';

const appointmentRouter = Router();

const appointments: Array<Appointment> = [];

appointmentRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const appointmentDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointments.find(appointment =>
    isEqual(appointmentDate, appointment.date),
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked.' });
  }

  const appointment = new Appointment(provider, appointmentDate);

  appointments.push(appointment);

  return response.json(appointment);
});

export default appointmentRouter;
