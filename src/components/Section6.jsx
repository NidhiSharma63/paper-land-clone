const Section6 = () => {
  return (
    <div className="section-6  bg-[#F4EB9E] md:p-[4rem] pt-[4rem]  md:pl-[4rem] pl-[2rem] p-[2rem] h-auto">
      <div className="max-w-[1920px] m-auto flex flex-col  justify-between h-auto gap-14">
        <div className="flex justify-between md:flex-row flex-col gap-10 align-middle text-[#373637]">
          <div className="flex flex-1 sm:flex-row  flex-col justify-between text-lg">
            <div className="md:mb-1 mb-4 mr-4">
              <strong className="text-3xl 2xl:text-4xl 3xl:text-6xl">
                Paper + Land
              </strong>
            </div>
            <div className="flex flex-col gap-3 text-md 2xl:text-xl 3xl:text-2xl">
              <p>Shop All Products </p>
              <p>Shop Art Prints</p>
              <p>Shop Cards & Stationery</p>
              <p>Shop Greeting Cards</p>
              <p>Shop Homewares</p>
              <p>Shop Coasters</p>
              <p>Shop Tea Towels</p>
            </div>
            <div className="flex flex-col gap-3">
              <p>About</p>
              <p>Sustainability</p>
              <p>Commissions</p>
              <p>Wholesale</p>
              <p> My account Delivery & Returns</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="md:w-[400px] w-full flex flex-col gap-3 text-lg">
            <strong className="text-3xl">Enjoy 5% off</strong>
            <p className="text-wrap break-words">
              Sign up to our newsletter and be the first to hear when new
              collections drop. You’ll also receive 5% off your first order.
            </p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-3 justify-between text-md 2xl:text-xl 3xl:text-2xl md:text-lg border-3 border-cyan-950">
          <p>
            © 2024 Paper + Land – Leeds, Yorkshire (UK). All rights reserved.
          </p>
          <p>Privacy Policy</p>
          <strong className="cursor-pointer">Instagram</strong>
        </div>
      </div>
    </div>
  );
};

export default Section6;
