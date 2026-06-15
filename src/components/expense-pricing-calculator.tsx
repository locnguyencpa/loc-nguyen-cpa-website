"use client";

import Link from "next/link";
import { useState } from "react";
import {
  bookkeepingFrequencyDetails,
  bookkeepingTiers,
  corporationTaxTiers,
  findPricingTier,
  type BookkeepingFrequency,
  type PricingTier,
} from "@/lib/expense-pricing";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function tierLabel(tier: PricingTier) {
  if (tier.max === null) return `${currency.format(tier.min)} or more`;
  return `${currency.format(tier.min)} to ${currency.format(tier.max)}`;
}

type CalculatorProps =
  | { kind: "corporation" }
  | { kind: "bookkeeping" };

export function ExpensePricingCalculator(props: CalculatorProps) {
  const [annualExpenses, setAnnualExpenses] = useState(
    props.kind === "corporation" ? 2_500 : 60_000,
  );
  const [frequency, setFrequency] = useState<BookkeepingFrequency>("monthly");

  const frequencyDetails =
    props.kind === "bookkeeping"
      ? bookkeepingFrequencyDetails[frequency]
      : null;
  const maximum =
    props.kind === "corporation"
      ? 1_000_000
      : frequencyDetails!.annualMaximum;
  const step =
    props.kind === "corporation" ? 500 : frequencyDetails!.annualStep;
  const pricingExpenses =
    props.kind === "corporation"
      ? annualExpenses
      : Math.floor(annualExpenses / frequencyDetails!.expenseDivisor);
  const tiers =
    props.kind === "corporation"
      ? corporationTaxTiers
      : bookkeepingTiers[frequency];
  const tier = findPricingTier(tiers, pricingExpenses);
  const isPremium = tier.standardPrice === null;
  const periodLabel =
    props.kind === "corporation" ? "per year" : frequencyDetails!.periodLabel;
  const expensePeriod =
    props.kind === "corporation" || frequency === "annual"
      ? "annual"
      : frequency;

  function changeFrequency(nextFrequency: BookkeepingFrequency) {
    const nextDetails = bookkeepingFrequencyDetails[nextFrequency];
    setFrequency(nextFrequency);
    setAnnualExpenses((current) =>
      Math.min(current, nextDetails.annualMaximum),
    );
  }

  return (
    <div className="calculator-card">
      {props.kind === "bookkeeping" && (
        <fieldset>
          <legend className="calculator-label">How often do you need bookkeeping?</legend>
          <div className="frequency-options">
            {(Object.keys(bookkeepingFrequencyDetails) as BookkeepingFrequency[]).map(
              (option) => (
                <button
                  key={option}
                  type="button"
                  className={frequency === option ? "active" : ""}
                  onClick={() => changeFrequency(option)}
                  aria-pressed={frequency === option}
                >
                  {bookkeepingFrequencyDetails[option].label}
                </button>
              ),
            )}
          </div>
        </fieldset>
      )}

      <div className="mt-9">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <label htmlFor="annual-expenses" className="calculator-label">
            Estimated annual business expenses
          </label>
          <output className="expense-output" htmlFor="annual-expenses">
            {annualExpenses === maximum
              ? `${currency.format(annualExpenses)}+`
              : currency.format(annualExpenses)}
          </output>
        </div>
        <input
          id="annual-expenses"
          className="expense-slider"
          type="range"
          min="0"
          max={maximum}
          step={step}
          value={annualExpenses}
          onChange={(event) => setAnnualExpenses(Number(event.target.value))}
        />
        <div className="slider-scale">
          <span>$0</span>
          <span>{currency.format(maximum)}+</span>
        </div>
      </div>

      <div className={`calculator-result ${isPremium ? "premium" : ""}`}>
        {isPremium ? (
          <>
            <div>
              <div className="result-kicker">Custom pricing</div>
              <h2>Contact for Premium</h2>
              <p>
                Your expense level is above the published pricing tiers. Complete
                the intake form for a custom scope and quote.
              </p>
            </div>
            <Link
              href="/contact"
              className="button button-primary justify-center"
            >
              Request a Custom Quote
            </Link>
          </>
        ) : (
          <>
            <div>
              <div className="result-kicker">Estimated first-year price</div>
              <div className="result-price">
                {currency.format(tier.firstYearPrice!)}
                <span>{periodLabel}</span>
              </div>
              <p>
                Regular price after year one:{" "}
                <strong>{currency.format(tier.standardPrice!)}</strong> {periodLabel}.
              </p>
            </div>
            <div className="tier-summary">
              <span>Pricing tier</span>
              <strong>
                {tierLabel(tier)} in {expensePeriod} expenses
              </strong>
              {props.kind === "bookkeeping" && frequency !== "annual" && (
                <small>
                  Your annual estimate is converted to approximately{" "}
                  {currency.format(pricingExpenses)} in {frequency} expenses.
                </small>
              )}
            </div>
          </>
        )}
      </div>

      <p className="calculator-disclaimer">
        This tool provides a pricing guide, not a final quote. Final pricing
        depends on the condition of the records, transaction complexity, number
        of accounts, states, and the agreed scope of work.
      </p>
    </div>
  );
}
