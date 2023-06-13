import React, {useState} from "react";

function SolarForm() {
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        price: '',
    });

    return (
        <div>
            {/* <!-- Customer Info --> */}
            <div className="customerInfo">
                <fieldset>
                    <span>Customer</span>
                    <div>
                        <label>First Name:</label>
                        <input v-model="customerFirstName" type='Name' placeholder='First Name' required />
                    </div>

                    <div>
                        <label>Last Name:</label>
                        <input v-model="customerLastName" type='Name' placeholder='Last Name' required />
                    </div>

                    <div>
                        <label>Street Address:</label>
                        <input v-model="customerAddrStreet" type='text' placeholder='Last Name' required />
                    </div>

                    <div>
                        <label>City:</label>
                        <input v-model="customerAddrCity" type='text' placeholder='City' required />
                    </div>

                    <div>
                        <label>State:</label>
                        <input v-model="customerAddrState" type='text' placeholder='State' required />
                    </div>

                    <div>
                        <label>ZIP Code:</label>
                        <input v-model="customerAddrZIP" type='number' placeholder='ZIP Code' required />
                    </div>
                </fieldset>
            </div>



            {/* <!-- House Electrical System --> */}
            <div className="projectElec">
                <fieldset>
                    <span>Site Electrical</span>
                    <div>
                        <label>Utility Company :</label>
                        <select v-model="Utility" id="Utility" name="Utility">
                            <option value="XCEL">XCEL</option>
                            <option value="IREA">IREA</option>
                            <option value="United Power">United Power</option>
                            <option value="Fort Collins">Fort Collins</option>
                        </select>
                    </div>



                    <label>Utility Meter # :</label>
                    <input v-model="utilityMeterNum" type="string" />


                    <div>
                        <label>Utility Service Disconnect Rating [A] :</label>
                        <select v-model="utilityServiceDisconnectRating">
                            <option value="100">100 A</option>
                            <option value="125">125 A</option>
                            <option value="150">150 A</option>
                            <option value="200">200 A</option>
                            <option value="225">225 A</option>
                            <option value="250">250 A</option>
                            <option value="300">300 A</option>
                            <option value="400">400 A</option>
                            <option value="600">600 A</option>
                            <option value="800">800 A</option>
                            <option value="1000">1000 A</option>
                        </select>
                    </div>

                    <div>
                        <label>Main Service Panel Rating [A] :</label>
                        <select v-model="MSPBusRating">
                            <option value="100">100 A</option>
                            <option value="125">125 A</option>
                            <option value="150">150 A</option>
                            <option value="200">200 A</option>
                            <option value="225">225 A</option>
                            <option value="250">250 A</option>
                            <option value="300">300 A</option>
                            <option value="400">400 A</option>
                            <option value="600">600 A</option>
                            <option value="800">800 A</option>
                            <option value="1000">1000 A</option>
                        </select>
                    </div>

                    <div>
                        <label>PV Meter Required :</label>
                        <select v-model="PVMeterReq" id="PVMeterReq" name="PVMeterReq">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    <div>
                        <label>Solar Installer :</label>
                        <select v-model="installer" id="installer" name="installer">
                            <option value="RGS Energy">RGS Energy</option>
                            <option value="Intelligent Energy">Intelligent Energy</option>
                            <option value="BrightStreet Energy">BrightStreet Energy</option>
                            <option value="Yourself">Yourself</option>
                        </select>
                    </div>

                </fieldset>

            </div>



            {/* <!-- PV System --> */}
            <div className="projectElec">
                <fieldset>
                    <span>Project Electrical</span>

                    <div>
                        <label>Module Quantity:</label>
                        <div v-model="modQty" type="number"></div>
                    </div>

                    <div>
                        <label>Choose a Module:</label>
                        <select v-model="modType" id="mods" name="mods">
                            <option value="Silfab SLA 310M">Silfab SLA 310M</option>
                            <option value="Silfab SLA 350M">Silfab SLA 350M</option>
                            <option value="Silfab SLA 375M">Silfab SLA 375M</option>
                            <option value="Silfab SLA 400M">Silfab SLA 400M</option>
                        </select>
                    </div>

                    <div>
                        <label>Choose a Module:</label>
                        <select v-model="inverterModel" id="invs" name="invs">
                            <option value="IQ7+">IQ7+</option>
                            <option value="IQ7">IQ7</option>
                        </select>
                    </div>

                    <div>
                        <label>Choose a Standoff:</label>
                        <select v-model="atttachmentType" id="standoff" name="standoff">
                            <option value="Unirac">Unirac Flashloc</option>
                            <option value="IronRidge">Ironridge Flashfoot </option>
                        </select>
                    </div>

                    <div>
                        <label>Choose a Rail:</label>
                        <select v-model="railType" id="standoff" name="standoff">
                            <option value="Unirac">Unirac Solarmount </option>
                            <option value="IronRidge">Ironridge XR100</option>
                        </select>
                    </div>

                    <label>Roof Quantity:</label>
                    <input v-model="roofQuantity" type="number" />


                </fieldset>
            </div>
        </div>
    );
}

export default SolarForm;
