import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useHistory } from "react-router-dom";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default function module() {
  const [dataa, setDataa] = useState({
    fname: "",
    email: "",
    phone: "",
    npersons: 0,
    date: "",
    time: "",
  });

  const addData = async () => {
    try {
      const { data, error } = await supabase
        .from("Booking")
        .insert([dataa])
        .select();
      console.log(data);
      if (!error) {
        // If there is no error, redirect to "/menu"
        history.push("/menu");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   console.log(dataa.fname);
  // }, [dataa]);
  return (
    <div>
      {" "}
      <div
        className="modal fade"
        id="BookingModal"
        tabindex="-1"
        aria-labelledby="BookingModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="mb-0">Reserve a table</h3>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body d-flex flex-column justify-content-center">
              <div className="booking">
                <form
                  className="booking-form row"
                  role="form"
                  action="#"
                  method="post"
                >
                  <div className="col-lg-6 col-12">
                    <label for="name" className="form-label">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={dataa.fname}
                      className="form-control"
                      placeholder="Your Name"
                      onChange={(e) =>
                        setDataa({ ...dataa, fname: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <label for="email" className="form-label">
                      Email Address
                    </label>

                    <input
                      type="text"
                      name="email"
                      id="email"
                      value={dataa.email}
                      className="form-control"
                      placeholder="Your Email"
                      onChange={(e) =>
                        setDataa({ ...dataa, email: e.target.value })
                      }
                      required
                    />
                    {/* <input
                      type="email"
                      name="email"
                      id="email"
                      value={dataa.email}
                      className="form-control"
                      placeholder="your@email.com"
                      onChange={(e) =>
                        setDataa({ ...dataa, email: e.target.value })
                      }
                      required
                    /> */}
                  </div>

                  <div className="col-lg-6 col-12">
                    <label for="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={dataa.phone}
                      className="form-control"
                      placeholder="Your Email"
                      onChange={(e) =>
                        setDataa({ ...dataa, phone: e.target.value })
                      }
                      required
                    />

                    {/* <input
                      type="telephone"
                      name="phone"
                      id="phone"
                      className="form-control"
                      placeholder="123-456-7890"
                    /> */}
                  </div>

                  <div className="col-lg-6 col-12">
                    <label for="people" className="form-label">
                      Number of persons
                    </label>

                    <input
                      type="text"
                      name="people"
                      id="people"
                      value={dataa.npersons}
                      className="form-control"
                      placeholder=" persons"
                      onChange={(e) =>
                        setDataa({ ...dataa, npersons: e.target.value })
                      }
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <label for="date" className="form-label">
                      Date
                    </label>

                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={dataa.date}
                      className="form-control"
                      onChange={(e) =>
                        setDataa({ ...dataa, date: e.target.value })
                      }
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <label for="time" className="form-label">
                      Time
                    </label>
                    <input
                      type="text"
                      name="time"
                      id="time"
                      value={dataa.time}
                      className="form-control"
                      placeholder="Your time"
                      onChange={(e) =>
                        setDataa({ ...dataa, time: e.target.value })
                      }
                      required
                    />
                    {/* <select
                      className="form-select form-control"
                      name="time"
                      id="time"
                    >
                      <option value="5" selected>
                        5:00 PM
                      </option>
                      <option value="6">6:00 PM</option>
                      <option value="7">7:00 PM</option>
                      <option value="8">8:00 PM</option>
                      <option value="9">9:00 PM</option>
                    </select> */}
                  </div>

                  {/* <div className="col-12">
                    <label for="message" className="form-label">
                      Special Request
                    </label>

                    <textarea
                      className="form-control"
                      rows="4"
                      id="message"
                      name="message"
                      placeholder=""
                    ></textarea>
                  </div> */}

                  <div className="col-lg-4 col-12 ms-auto">
                    <button
                      onClick={addData}
                      type="submit"
                      className="form-control"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
