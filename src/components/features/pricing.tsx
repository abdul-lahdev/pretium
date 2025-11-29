"use client";
import { useState } from "react";
import { Card, CardBody } from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/solid";

export default function Pricing() {
    const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

    const multiply = billing === "yearly" ? 0.75 : 1; // yearly = 25% OFF

    return (
        <div className="w-full py-16 bg-white flex flex-col items-center">

            <h1 className="text-[var(--dark4)] text-[56px]/[64px] font-semibold">
                Honest pricing for real growth
            </h1>
            {/* Billing Toggle */}
            <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-full shadow mb-10">
                <button
                    onClick={() => setBilling("monthly")}
                    className={`px-4 py-1 rounded-full text-sm font-medium ${billing === "monthly" ? "bg-black text-white" : "text-gray-600"
                        }`}
                >
                    Monthly
                </button>
                <button
                    onClick={() => setBilling("yearly")}
                    className={`px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${billing === "yearly" ? "bg-black text-white" : "text-gray-600"
                        }`}
                >
                    Yearly <span className="text-purple-600 font-semibold">Save 25%</span>
                </button>
            </div>

            {/* Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-6">

                {/* Starter */}
                <Card className="border p-5 rounded-2xl shadow-none">
                    <CardBody>
                        <h3 className="text-xl font-semibold">Starter</h3>
                        <p className="text-4xl font-bold mt-3 text-black">
                            ${59 * multiply}
                            <span className="text-base text-gray-500">/month</span>
                        </p>

                        <h4 className="mt-6 mb-3 font-semibold text-gray-800">Access to :</h4>
                        <Feature label="Flexible user access & customizable" />
                        <Feature label="Comprehensive patient management" />
                        <Feature label="Streamlined appointment management" />
                        <Feature label="Encrypted communication channels" />

                        <h4 className="mt-6 mb-3 font-semibold text-gray-800">Includes :</h4>
                        <Feature label="Dynamic user access & management" />
                        <Feature label="Integrated health record system (IHRS)" />
                        <Feature label="Effortless scheduling solutions" />

                        <button className="w-full bg-purple-600 text-white mt-8 py-3 rounded-full font-semibold">
                            Start Free Trial
                        </button>
                    </CardBody>
                </Card>

                {/* Growth */}
                <Card className="p-5 rounded-2xl bg-purple-600 text-white">
                    <CardBody>
                        <h3 className="text-xl font-semibold">Growth</h3>
                        <p className="text-4xl font-bold mt-3">
                            ${69 * multiply}
                            <span className="text-base text-purple-200">/month</span>
                        </p>

                        <h4 className="mt-6 mb-3 font-semibold">Everything in Starter, plus:</h4>
                        <FeatureWhite label="Scalable user access & admin privileges" />
                        <FeatureWhite label="Holistic health record management" />
                        <FeatureWhite label="Optimized appointment booking" />
                        <FeatureWhite label="Confidential messaging platform" />

                        <h4 className="mt-6 mb-3 font-semibold">Access to :</h4>
                        <FeatureWhite label="Unlimited user profiles & admin settings" />
                        <FeatureWhite label="Advanced electronic health" />
                        <FeatureWhite label="Smart appointment coordination" />

                        <button className="w-full bg-white text-purple-700 mt-8 py-3 rounded-full font-semibold">
                            Start Free Trial
                        </button>
                    </CardBody>
                </Card>

                {/* Pro */}
                <Card className="border p-5 rounded-2xl shadow-none">
                    <CardBody>
                        <h3 className="text-xl font-semibold">Pro</h3>
                        <p className="text-4xl font-bold mt-3 text-black">
                            ${79 * multiply}
                            <span className="text-base text-gray-500">/month</span>
                        </p>

                        <h4 className="mt-6 mb-3 font-semibold text-gray-800">Everything in Growth, plus:</h4>
                        <Feature label="Limitless user roles & administrative" />
                        <Feature label="Next-gen electronic health records" />
                        <Feature label="Intuitive scheduling interface" />
                        <Feature label="Secure patient messaging system" />

                        <h4 className="mt-6 mb-3 font-semibold text-gray-800">Access to :</h4>
                        <Feature label="Unlimited user accounts & role" />
                        <Feature label="Unified health records platform (UHRP)" />
                        <Feature label="Seamless appointment management" />

                        <button className="w-full bg-purple-600 text-white mt-8 py-3 rounded-full font-semibold">
                            Start Free Trial
                        </button>
                    </CardBody>
                </Card>

            </div>
        </div>
    );
}

/* ------- Feature Components ------- */

const Feature = ({ label }: { label: string }) => (
    <div className="flex items-center gap-2 my-2">
        <CheckIcon className="w-5 h-5 text-purple-600" />
        <p className="text-gray-700 text-sm">{label}</p>
    </div>
);

const FeatureWhite = ({ label }: { label: string }) => (
    <div className="flex items-center gap-2 my-2">
        <CheckIcon className="w-5 h-5 text-white" />
        <p className="text-white text-sm">{label}</p>
    </div>
);
