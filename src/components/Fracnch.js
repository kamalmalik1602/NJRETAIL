import React from "react";
import "./Franchise.css";
const Fracnch = () => {
  return (
    <>
    <div class="heading-text-3">Franchise Form</div>
<div class="col-lg-8 ">
                <form class="contact-form row" method="post" action="#" role="form">

                    <div class="col-lg-6 mb-4">
                        <div class="form-floating">
                            <input type="text" class="form-control form-control-lg light-300" id="floatingname" name="inputname" placeholder="Name"/>
                            <label for="floatingname light-300">Name</label>
                        </div>
                    </div>

                    <div class="col-lg-6 mb-4">
                        <div class="form-floating">
                            <input type="text" class="form-control form-control-lg light-300" id="floatingemail" name="inputemail" placeholder="Email"/>
                            <label for="floatingemail light-300">Email</label>
                        </div>
                    </div>

                    <div class="col-lg-6 mb-4">
                        <div class="form-floating">
                            <input type="text" class="form-control form-control-lg light-300" id="floatingphone" name="inputphone" placeholder="Phone"/>
                            <label for="floatingphone light-300">Phone</label>
                        </div>
                    </div>

                    <div class="col-lg-6 mb-4">
                        <div class="form-floating">
                            <input type="text" class="form-control form-control-lg light-300" id="floatingcompany" name="inputcompany" placeholder="Company Name"/>
                            <label for="floatingcompany light-300">Address</label>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4">
                        <div class="form-floating">
                            <input type="text" class="form-control form-control-lg light-300" id="floatingcompany" name="inputcompany" placeholder="Company Name"/>
                            <label for="floatingcompany light-300">City</label>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4">
                        <div class="form-floating">
                            <input type="text" class="form-control form-control-lg light-300" id="floatingcompany" name="inputcompany" placeholder="Company Name"/>
                            <label for="floatingcompany light-300">Pin code</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                                        <label for="">Select Your Investment Size *</label>
                                        <select name="investment" class="form-control">
                                        <option value="0">0</option>
                                            <option value="2,00,000 - 5,00,000">2,00,000 - 5,00,000</option>
                                            <option value="5,00,000 - 10,00,000">5,00,000 - 10,00,000</option>
                                            <option value="10,00,000 - 20,00,000">10,00,000 - 20,00,000
                                            </option>
                                        </select>
                                    </div>
                    <div class="col-12">
                        <div class="form-floating mb-3">
                            <textarea class="form-control light-300" rows="8" placeholder="Message" id="floatingtextarea"></textarea>
                            <label for="floatingtextarea light-300">Why NJretail?</label>
                        </div>
                    </div>
                    <div class="col-lg-12"><fieldset><button type="submit" id="form-submit" class="main-button ">Send</button></fieldset></div>
                   
                </form>
            </div>
    </>
  );
};

export default Fracnch;
