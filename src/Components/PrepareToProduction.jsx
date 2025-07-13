import React from 'react';

const PrepareToProduction = () => {
    return (
        <section
            data-aos="fade-up"
            data-aos-duration="2000" 
        className="py-16 bg-gradient-to-b from-[#0f0f1b8d] to-[#18182787] text-white px-6">
            <h2 className="text-4xl font-bold text-center mb-12"> From Paper to Production</h2>
            <div className="grid md:grid-cols-3 gap-10">

                <div className="bg-[#1f1f2e] p-6 rounded-2xl shadow-lg border border-[#2a2a40]">
                    <h3 className="text-xl font-semibold">📓 2022 — Pen & Paper</h3>
                    <p className="text-sm mt-2">
                        With no computer, I started writing HTML, CSS, and JavaScript by hand in a notebook. Learning through mobile screenshots and library books.
                    </p>
                </div>

                <div className="bg-[#1f1f2e] p-6 rounded-2xl shadow-lg border border-[#2a2a40]">
                    <h3 className="text-xl font-semibold">💻 2023 — First Laptop</h3>
                    <p className="text-sm mt-2">
                        Thanks to my family’s support, I got my first laptop. I practiced day and night — building mini-projects and facing challenges without mentors.
                    </p>
                </div>

                <div className="bg-[#1f1f2e] p-6 rounded-2xl shadow-lg border border-[#2a2a40]">
                    <h3 className="text-xl font-semibold">🚀 2024–25 — Live Projects & Deployments</h3>
                    <p className="text-sm mt-2">
                        Launched several real-world apps like <span className="text-blue-400 font-semibold">TastyRide</span>, <span className="text-blue-400 font-semibold">Health Rex Store</span>, and more. Focused on solving real problems and improving user experience.
                    </p>
                </div>

            </div>
        </section>

    );
};

export default PrepareToProduction;