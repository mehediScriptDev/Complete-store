import faq from "../images/faq.png";

const Faq = () => {
  return (
    <section className="py-10 bg-base-100">
      <div className="w-11/12 md:w-9/12 mx-auto">
        <div className="breadcrumbs text-sm mb-6">
          <ul className="flex gap-2 text-gray-500">
            <li>
              <a className="text-blue-600 hover:underline" href="/">
                TravelBid
              </a>
            </li>

            <li className="text-black font-medium">F.A.Q</li>
          </ul>
        </div>
        <h2 className="text-3xl font-bold text-center mb-8 text-neutral">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col lg:flex-row justify-center gap-3 items-center">
          <img src={faq} alt="" />
          <div className="space-y-4">
            {/* Question 1 */}
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="faq" defaultChecked />
              <div className="collapse-title text-lg font-medium">
                What is TravelBid?
              </div>
              <div className="collapse-content">
                <p>
                  TravelBid is a platform where you can bid for travel packages
                  at competitive prices from verified agencies.
                </p>
              </div>
            </div>

            {/* Question 2 */}
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="faq" />
              <div className="collapse-title text-lg font-medium">
                How can I contact customer support?
              </div>
              <div className="collapse-content">
                <p>
                  You can reach our support team via the contact form on the
                  Contact page or email us directly at support@travelbid.com.
                </p>
              </div>
            </div>

            {/* Question 3 */}
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="faq" />
              <div className="collapse-title text-lg font-medium">
                Is bidding free for users?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, creating an account and bidding on travel packages is
                  completely free for all users.
                </p>
              </div>
            </div>

            {/* Question 4 */}
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="faq" />
              <div className="collapse-title text-lg font-medium">
                Can I cancel a bid after placing it?
              </div>
              <div className="collapse-content">
                <p>
                  Once a bid is accepted and confirmed, cancellation policies
                  depend on the agency’s terms. Please read them carefully
                  before confirming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
