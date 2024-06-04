const Section6 = () => {
  return (
    <div className="section-6 bg-[#F4EB9E] p-[4rem] pt-[4rem]  pl-[7rem] flex flex-col justify-between h-auto gap-14">
      <div className="flex justify-between align-middle text-[#373637]">
        <div className="flex flex-1 justify-between text-lg">
          <div className="">
            <strong className="text-3xl">Paper + Land</strong>
          </div>
          <div className="flex flex-col gap-3">
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
        <div className="w-[400px] flex flex-col gap-3 text-lg">
          <strong className="text-3xl">Enjoy 5% off</strong>
          <p>
            Sign up to our newsletter and be the first to hear when new
            collections drop. You’ll also receive 5% off your first order.
          </p>
        </div>
      </div>
      <div className="flex justify-between text-lg">
        <p>© 2024 Paper + Land – Leeds, Yorkshire (UK). All rights reserved.</p>
        <p>Privacy Policy</p>
        <strong className="cursor-pointer">Instagram</strong>
      </div>
    </div>
  );
};

export default Section6;
