import Currency from 'react-currency-formatter';

export const Result = ({result}) => (

  <div className="result">

    <div className="result__inner">

      <section className="single-msg paragraph single-msg--copy-right">

        <div className="single-msg__outer-wrapper">

          <div className="single-msg__image">

            <picture>
              <source srcset="/assets/no_image.jpg"
                      media="all and (min-width: 1024px)" type="image/jpeg"/>
              <source srcset="/assets/no_image.jpg"
                      media="all and (min-width: 740px)" type="image/jpeg"/>
              <source srcset="/assets/no_image.jpg"
                      media="(min-width: 0px)" type="image/jpeg"/>
              <img src="/assets/no_image.jpg"
                   typeof="foaf:Image"/>
            </picture>

          </div>

          <div className="single-msg__copy_wrapper">

            <div className="single-msg__copy">

              <div className="single-msg__title">
                <h3><strong>{result._source.Name}</strong> <small>({result._source.Issue})</small></h3>
              </div>

              <div className="single-msg__body">
                <p>
                  <strong>Grant ID:</strong> {result._source.GrantsProjectID} <br/>
                  <strong>Start Date:</strong> {result._source.StartDate} <br/>
                  <strong>Country:</strong> {result._source.CountryName} <br/>
                  <strong>Amount</strong>
                  <Currency quantity={result._source.AmountAwarded} currency="GBP" pattern=" !##,### "/>
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  </div>
);
