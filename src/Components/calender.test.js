import { act, render, screen } from "@testing-library/react"
import Calender from "./calender";

test("renders learn react link", () => {
    const { asFragment } = render(<Calender />);
    expect(asFragment()).toMatchSnapshot();
});

describe("Calender Component", () => {
    it('should show current year', () => {
        render(<Calender />);
        const container = screen.getByTestId('years');
        const currentYear = new Date().toLocaleDateString().split('/')[2];
        expect(currentYear).toBe(container.textContent);
    });

    it('should show current month', () => {
        render(<Calender />);
        const container = screen.getByTestId('months');
        const currentMonth = new Date().toLocaleString('default', { month: 'long' });
        expect(currentMonth).toBe(container.textContent);
    });

    it('should show current day', () => {
        render(<Calender />);
        const container = screen.getByTestId('days');
        const currentDay = new Date().toLocaleDateString('default', { weekday: 'long' });
        expect(currentDay).toBe(container.textContent);
    });

    it('should show current date', () => {
        render(<Calender />);
        const container = screen.getByTestId('dates');
        const currentDate = new Date().toLocaleDateString().split('/')[0];
        expect(currentDate).toBe(container.textContent);
    });

    it('should show current time', () => {
        render(<Calender />);
        const container = screen.getByTestId('times');
        const currentTime = new Date().toLocaleTimeString();
        // expect(currentTime).toBe(container);
    });

})