
        import { LitElement, html, css } from 'lit';

    
        class TaskCardSection extends LitElement {
            // Define the component's styles using Lit's css tagged template literal
            static styles = css`
                /* Import Google Fonts for "Nunito" */
                @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap");

                /* Ensure the custom element itself behaves as a block and takes full width */
                :host {
                    display: block;
                    width: 100%;
                }

                /* Basic reset for all elements within the shadow DOM */
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                /* Anchor tag base styles */
                a {
                    text-decoration: none;
                    display: inline-block;
                }

                /* Section container for the cards, enabling responsive layout */
                section {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap; /* Allows cards to wrap to the next line on smaller screens */
                    max-width: 50em; /* Maximum width for the section */
                    margin-inline: auto; /* Center the section horizontally */
                    gap: 3.25rem; /* Space between cards */
                    position: relative;
                    z-index: 10;
                    align-items: center;
                    padding: 5em 0; /* Vertical padding for the section */
                }

                /* Base styles for individual cards */
                .card {
                    position: relative;
                    z-index: 555;
                    max-width: 20rem; /* Maximum width for a single card */
                    min-height: 20rem; /* Minimum height for a single card */
                    width: 90%; /* Responsive width for cards */
                    display: grid;
                    place-content: center;
                    place-items: center;
                    text-align: center;
                    box-shadow: 0.063em 0.75em 1.563em rgb(0 0 0 / 78%); /* Deep shadow for 3D effect */
                    border-radius: 2.25rem; /* Rounded corners for the card */
                }

                /* Pseudo-element for the gradient border effect on cards */
                .card::before {
                    position: absolute;
                    content: "";
                    top: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 2.25rem;
                    z-index: -1; /* Place behind the card content */
                    border: 0.155rem solid transparent; /* Transparent border for mask effect */
                    /* Webkit mask for creating a border from a gradient */
                    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: destination-out;
                    mask-composite: exclude; /* Exclude the inner content from the mask */
                }

                /* Card header styles */
                .card-header {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0.8em 0.5em 0em 1.5em; /* Padding for header content */
                }

                .card-header .date {
                    color: #ddd; /* Light grey color for the date text */
                }

                .card-header svg {
                    color: #fff; /* White color for SVG icons */
                    width: 2.5rem;
                    cursor: pointer;
                }

                /* Card body styles */
                .card-body {
                    position: absolute;
                    width: 100%;
                    display: block;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%); /* Center the body content */
                    padding: 0.7em 1.25em 0.5em 1.5em;
                }

                .card-body h3 {
                    color: #fff; /* White color for headings */
                    font-size: 1.375rem;
                    margin-top: 0.625em;
                    margin-bottom: 0.188em;
                    text-transform: capitalize;
                    font-weight: 600;
                }

                .card-body p {
                    color: #ddd; /* Light grey color for paragraph text */
                    font-size: 1rem;
                    letter-spacing: 0.031rem;
                }

                /* Progress bar container styles */
                .card-body .progress {
                    margin-top: 0.938rem;
                }

                .card-body .progress .progress-bar {
                    position: relative;
                    width: 100%;
                    background: #363636; /* Background color for the progress bar track */
                    height: 0.313rem;
                    display: block;
                    border-radius: 3.125rem;
                }

                /* Progress bar fill (dynamic width set by color classes) */
                .card-body .progress .progress-bar:after {
                    position: absolute;
                    content: "";
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    height: 100%;
                    display: block;
                    border-radius: 3.125rem;
                }

                .card-body .progress span:first-of-type {
                    color: #fff; /* White color for "Progress" text */
                    text-align: left;
                    font-weight: 600;
                    width: 100%;
                    display: block;
                    margin-bottom: 0.313rem;
                }

                .card-body .progress span {
                    margin-top: 0.313rem;
                    text-align: right;
                    display: block;
                    color: #fff; /* White color for percentage text */
                }

                /* Card footer styles */
                .card-footer {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                    border-top: 0.063rem solid #292929; /* Separator line */
                    display: flex;
                    justify-content: space-between;
                    padding: 0.7em 1.25em 0.5em 1.5em;
                    background: #151419; /* Dark background for footer */
                    border-bottom-left-radius: 2.25rem;
                    border-bottom-right-radius: 2.25rem;
                }

                .card-footer ul {
                    display: flex;
                    align-items: center;
                }

                .card-footer ul li {
                    list-style-type: none;
                    display: flex;
                    margin-right: -0.625rem; /* Overlap profile images */
                }

                .card-footer ul li img {
                    border-radius: 50%; /* Circular profile images */
                    width: 1.875rem;
                    height: 1.875rem;
                    object-fit: cover;
                }

                /* "Add" button styles */
                .card-footer .btn-add {
                    width: 1.375rem;
                    height: 1.375rem;
                    border-radius: 50%;
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .card-footer .btn-add svg {
                    width: 1rem;
                }

                /* "Countdown" button styles */
                .card-footer .btn-countdown {
                    background: #222127; /* Dark background for countdown button */
                    color: #fff;
                    border-radius: 2em;
                    padding: 0.625rem 1.5rem;
                    transition: background-color 0.3s ease; /* Smooth transition on hover */
                }

                /* Color specific styles for cards */
                .green {
                    background: radial-gradient(
                        ellipse at right top,
                        #107667ed 0%,
                        #151419 47%,
                        #151419 100%
                    );
                }

                .green:before {
                    background: linear-gradient(
                        45deg,
                        #232228, #232228, #232228, #232228, #01c3a8 /* Green border gradient */
                    )
                    border-box;
                }
                .green .btn-add {
                    background: #01c3a8; /* Green add button */
                }
                .green .progress-bar:after {
                    width: 90%; /* Progress for green card */
                    background: #01c3a8; /* Green progress fill */
                }
                .green .btn-countdown:hover {
                    background: #01c3a8; /* Green hover for countdown button */
                }

                .blue {
                    background: radial-gradient(
                        ellipse at right top,
                        #00458f8f 0%,
                        #151419 45%,
                        #151419 100%
                    );
                }

                .blue:before {
                    background: linear-gradient(
                        45deg,
                        #232228, #232228, #232228, #232228, #1890ff /* Blue border gradient */
                    )
                    border-box;
                }
                .blue .btn-add {
                    background: #1890ff; /* Blue add button */
                }
                .blue .progress-bar:after {
                    width: 20%; /* Progress for blue card */
                    background: #1890ff; /* Blue progress fill */
                }
                .blue .btn-countdown:hover {
                    background: #1890ff; /* Blue hover for countdown button */
                }

                .orange {
                    background: radial-gradient(
                        ellipse at right top,
                        #ffb74194 0%,
                        #151419 47%,
                        #151419 100%
                    );
                }

                .orange:before {
                    background: linear-gradient(
                        45deg,
                        #232228, #232228, #232228, #232228, #ffb741 /* Orange border gradient */
                    )
                    border-box;
                }
                .orange .btn-add {
                    background: #ffb741; /* Orange add button */
                }
                .orange .progress-bar:after {
                    width: 30%; /* Progress for orange card */
                    background: #ffb741; /* Orange progress fill */
                }
                .orange .btn-countdown:hover {
                    background: #ffb741; /* Orange hover for countdown button */
                }

                .red {
                    background: radial-gradient(
                        ellipse at right top,
                        #a63d2a82 0%,
                        #151419 47%,
                        #151419 100%
                    );
                }

                .red:before {
                    background: linear-gradient(
                        45deg,
                        #232228, #232228, #232228, #232228, #a63d2a /* Red border gradient */
                    )
                    border-box;
                }
                .red .btn-add {
                    background: #a63d2a; /* Red add button */
                }
                .red .progress-bar:after {
                    width: 50%; /* Progress for red card */
                    background: #a63d2a; /* Red progress fill */
                }
                .red .btn-countdown:hover {
                    background: #a63d2a; /* Red hover for countdown button */
                }
            `;

            // Render method returns the HTML template for the component
            render() {
                return html`
                    <section>
                        <div class="card green">
                            <div class="card-header">
                                <div class="date">
                                    Feb 2, 2021
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                    <path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="card-body">
                                <h3>web designing</h3>
                                <p>Prototyping</p>
                                <div class="progress">
                                    <span>Progress</span>
                                    <div class="progress-bar"></div>
                                    <span>90%</span>
                                </div>
                            </div>
                            <div class="card-footer">
                                <ul>
                                    <li> <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile picture of a person"></li>
                                    <li> <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile picture of a person"></li>
                                    <a href="#" class="btn-add"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                            <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </ul>
                                <a href="#" class="btn-countdown">2 days left</a>
                            </div>
                        </div>

                        <div class="card orange">
                            <div class="card-header">
                                <div class="date">
                                    Feb 05, 2021
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                    <path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="card-body">
                                <h3>mobile app</h3>
                                <p>Shopping</p>
                                <div class="progress">
                                    <span>Progress</span>
                                    <div class="progress-bar"></div>
                                    <span>30%</span>
                                </div>
                            </div>
                            <div class="card-footer">
                                <ul>
                                    <li> <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile picture of a person"></li>
                                    <li> <img src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile picture of a person"></li>
                                    <a href="#" class="btn-add"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                            <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </ul>
                                <a href="#" class="btn-countdown">3 weeks left</a>
                            </div>
                        </div>

                        <div class="card red">
                            <div class="card-header">
                                <div class="date">
                                    March 03, 2021
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                    <path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="card-body">
                                <h3>dashboard</h3>
                                <p>Medical</p>
                                <div class="progress">
                                    <span>Progress</span>
                                    <div class="progress-bar"></div>
                                    <span>50%</span>
                                </div>
                            </div>
                            <div class="card-footer">
                                <ul>
                                    <li> <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile picture of a person"></li>
                                    <li> <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile picture of a person"></li>
                                    <a href="#" class="btn-add"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                            <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </ul>
                                <a href="#" class="btn-countdown">3 weeks left</a>
                            </div>
                        </div>

                        <div class="card blue">
                            <div class="card-header">
                                <div class="date">
                                    March 08, 2021
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                    <path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="card-body">
                                <h3>web designing</h3>
                                <p>Wireframing</p>
                                <div class="progress">
                                    <span>Progress</span>
                                    <div class="progress-bar"></div>
                                    <span>20%</span>
                                </div>
                            </div>
                            <div class="card-footer">
                                <ul>
                                    <li> <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile picture of Erik Longman"></li>
                                    <li> <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile picture of Jane Doe"></li>
                                    <a href="#" class="btn-add"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                            <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </ul>
                                <a href="#" class="btn-countdown">3 weeks left</a>
                            </div>
                        </div>
                    </section>
                `;
            }
        }
        // Define the custom element with its tag name
        customElements.define('task-card-section', TaskCardSection);
