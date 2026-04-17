import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// YUP VALIDATION SCHEMA — MIRRORS ORIGINAL VANILLA VALIDATION RULES
const schema = yup.object({
    name: yup
        .string()
        .required("An alias is required.")
        .max(20, "Alias must be 20 characters or fewer."),
    email: yup
        .string()
        .required("An email address is required.")
        .email("Please enter a valid email address."),
    partySize: yup
        .string()
        .required("Please select a party size."),
    date: yup
        .string()
        .required("A reservation date is required.")
        .test("not-past", "Date must be today or in the future.", function(value) {
            if (!value) return false;
            const selected = new Date(value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return selected >= today;
        }),
    time: yup
        .string()
        .required("A reservation time is required."),
    seatingChoice: yup
        .string()
        .required("Please select a seating preference."),
    dietaryNotes: yup
        .string()
        .max(30, "Dietary notes must be 30 characters or fewer.")
        .optional(),
    newsletter: yup
        .boolean()
        .optional()
});

export default function ReservationsPage() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful }
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            partySize: "",
            date: "",
            time: "",
            seatingChoice: "",
            dietaryNotes: "",
            newsletter: false
        }
    });

    // ON VALID SUBMIT — LOG RESERVATION AND RESET FORM
    function onSubmit(data) {
        console.log("Reservation submitted:", data);
        reset();
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">

                    {/* INTRO CARD */}
                    <div className="card">
                        <h1>RESERVATIONS</h1>
                        <p>
                            At The Gear &amp; Gutter Speakeasy, nothing is ever quite as simple as walking
                            through the front door. Reservations are accepted <strong>by request only</strong>,
                            as space in our little corner of the underground is limited and discretion is part
                            of the experience. Submit your request below and our staff will review it carefully.
                            If the timing is right and the room allows, you'll receive confirmation with
                            instructions on how—and when—to find the door.
                        </p>
                    </div>

                    {/* SUCCESS CONFIRMATION */}
                    {isSubmitSuccessful && (
                        <div id="form-confirmation" className="card">
                            Your request has been received. Watch for the knock.
                        </div>
                    )}

                    {/* RESERVATION FORM */}
                    <div className="card" id="reservation-form">

                        {/* CONTACT INFO */}
                        <fieldset>
                            <legend>Contact Info:</legend>

                            <div>
                                <label htmlFor="name">Alias:</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="e.g. J. Hawthorne"
                                    {...register("name")}
                                />
                                {errors.name && (
                                    <span className="field-error">{errors.name.message}</span>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="name@example.com"
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <span className="field-error">{errors.email.message}</span>
                                )}
                            </div>
                        </fieldset>

                        {/* RESERVATION DETAILS */}
                        <fieldset>
                            <legend>Reservation Details:</legend>

                            <div>
                                <label htmlFor="partySize">Party Size (Max Size: 8)</label>
                                <select id="partySize" {...register("partySize")}>
                                    <option value="">-- Select --</option>
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(function(n) {
                                        return <option key={n} value={String(n)}>{n}</option>;
                                    })}
                                </select>
                                {errors.partySize && (
                                    <span className="field-error">{errors.partySize.message}</span>
                                )}
                            </div>

                            <div>
                                <label htmlFor="date">Select a date (today or future):</label>
                                <input type="date" id="date" {...register("date")} />
                                {errors.date && (
                                    <span className="field-error">{errors.date.message}</span>
                                )}
                            </div>

                            <div>
                                <label htmlFor="time">Time:</label>
                                <input type="time" id="time" {...register("time")} />
                                {errors.time && (
                                    <span className="field-error">{errors.time.message}</span>
                                )}
                            </div>
                        </fieldset>

                        {/* SEATING */}
                        <fieldset>
                            <legend>Seating:</legend>

                            <div>
                                <input type="radio" id="seating-booth" value="booth" {...register("seatingChoice")} />
                                <label htmlFor="seating-booth">The Backroom Booth</label>
                            </div>
                            <div>
                                <input type="radio" id="seating-bar" value="bar" {...register("seatingChoice")} />
                                <label htmlFor="seating-bar">The Boiler Bar</label>
                            </div>
                            <div>
                                <input type="radio" id="seating-table" value="table" {...register("seatingChoice")} />
                                <label htmlFor="seating-table">The Gear Table</label>
                            </div>
                            {errors.seatingChoice && (
                                <span className="field-error">{errors.seatingChoice.message}</span>
                            )}
                        </fieldset>

                        {/* PREFERENCES */}
                        <fieldset>
                            <legend>Preferences:</legend>

                            <div>
                                <label htmlFor="dietaryNotes">Dietary Notes:</label>
                                <textarea
                                    id="dietaryNotes"
                                    placeholder="e.g. no nuts, vegetarian, gluten-free"
                                    {...register("dietaryNotes")}
                                />
                                {errors.dietaryNotes && (
                                    <span className="field-error">{errors.dietaryNotes.message}</span>
                                )}
                            </div>

                            <div>
                                <label htmlFor="newsletter">Optional Newsletter Opt-in:</label>
                                <input type="checkbox" id="newsletter" {...register("newsletter")} />
                            </div>
                        </fieldset>

                        {/* FORM ACTIONS */}
                        <div>
                            <button type="button" onClick={handleSubmit(onSubmit)}>Submit</button>
                            <button type="button" onClick={function() { reset(); }}>Reset</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
