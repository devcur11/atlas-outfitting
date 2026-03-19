"use client";

import { useState, useEffect } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  tripType: string;
  preferredLocation: string;
  preferredDates: string;
  groupSize: string;
  experienceLevel: string;
  additionalNotes: string;
}

const tripTypes = [
  "Float & Wade ($750/day)",
  "Land of the Giants — Jet Boat ($850/day)",
  "Moloka\u02BBi, Hawai\u02BBi (starting at $5,500)",
  "Not sure yet",
];

const locations = ["Bozeman", "Helena", "Dillon", "Missoula", "Whitefish", "Flexible"];

const groupSizes = [
  "1 angler",
  "2 anglers",
  "3+ (multiple boats)",
  "Moloka\u02BBi group (2-4)",
];

const experienceLevels = [
  "Never fly fished before",
  "Beginner",
  "Intermediate",
  "Experienced",
];

const inputClasses =
  "w-full px-4 py-3 rounded-md border border-sand bg-warm-white text-charcoal font-sans focus:outline-none focus:ring-2 focus:ring-river focus:border-transparent";

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    tripType: "",
    preferredLocation: "",
    preferredDates: "",
    groupSize: "",
    experienceLevel: "",
    additionalNotes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const isMolokai = formData.tripType === "Moloka\u02BBi, Hawai\u02BBi (starting at $5,500)";

  const showLocationField = [
    "Float & Wade ($750/day)",
    "Land of the Giants — Jet Boat ($850/day)",
  ].includes(formData.tripType);

  const filteredGroupSizes = isMolokai
    ? []
    : groupSizes.filter((s) => s !== "Moloka\u02BBi group (2-4)");

  useEffect(() => {
    if (!showLocationField) {
      setFormData((prev) => ({ ...prev, preferredLocation: "" }));
    }
  }, [showLocationField]);

  useEffect(() => {
    if (isMolokai) {
      setFormData((prev) => ({ ...prev, groupSize: "" }));
    }
  }, [isMolokai]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="bg-warm-white rounded-lg border border-sand p-8 text-center">
        <h3 className="font-serif font-bold text-2xl text-river mb-3">Thanks!</h3>
        <p className="text-charcoal/80 font-sans">
          We&apos;ll be in touch within a few days to confirm your trip.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <p className="font-sans font-semibold text-sm text-charcoal mb-1.5">
          Name <span className="text-copper">*</span>
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <div>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block font-sans font-semibold text-sm text-charcoal mb-1.5">
          Phone <span className="text-copper">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-sans font-semibold text-sm text-charcoal mb-1.5">
          Email <span className="text-copper">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="tripType" className="block font-sans font-semibold text-sm text-charcoal mb-1.5">
          Trip Type <span className="text-copper">*</span>
        </label>
        <select
          id="tripType"
          name="tripType"
          required
          value={formData.tripType}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Select a trip type</option>
          {tripTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {showLocationField && (
        <div>
          <label htmlFor="preferredLocation" className="block font-sans font-semibold text-sm text-charcoal mb-1.5">
            Preferred Location
          </label>
          <select
            id="preferredLocation"
            name="preferredLocation"
            value={formData.preferredLocation}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select a location</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label htmlFor="preferredDates" className="block font-sans font-semibold text-sm text-charcoal mb-1.5">
          Preferred Dates
        </label>
        <input
          type="text"
          id="preferredDates"
          name="preferredDates"
          placeholder="e.g., July 15-18, 2026 or anytime in August"
          value={formData.preferredDates}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      {!isMolokai && (
        <div>
          <label htmlFor="groupSize" className="block font-sans font-semibold text-sm text-charcoal mb-1.5">
            Group Size
          </label>
          <select
            id="groupSize"
            name="groupSize"
            value={formData.groupSize}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select group size</option>
            {filteredGroupSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label htmlFor="experienceLevel" className="block font-sans font-semibold text-sm text-charcoal mb-1.5">
          Experience Level
        </label>
        <select
          id="experienceLevel"
          name="experienceLevel"
          value={formData.experienceLevel}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Select experience level</option>
          {experienceLevels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="additionalNotes" className="block font-sans font-semibold text-sm text-charcoal mb-1.5">
          Anything else?
        </label>
        <textarea
          id="additionalNotes"
          name="additionalNotes"
          rows={4}
          placeholder="Special occasions, dietary restrictions, health considerations, gear questions..."
          value={formData.additionalNotes}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      {submitStatus === "error" && (
        <p className="text-red-600 text-sm font-sans">
          Something went wrong. Please try again or call us at{" "}
          <a href="tel:+14062025383" className="underline">
            (406) 202-5383
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-river text-white rounded-md px-7 py-3.5 font-sans font-semibold tracking-wide hover:bg-river-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
