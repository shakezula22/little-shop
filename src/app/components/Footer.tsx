import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex justify-around h-64 border-y-2 my-10 items-center">
      <div className="flex items-center h-full text-2xl">
        <h1>We'd Love to Hear from You!</h1>
      </div>
      <div className="flex flex-col h-full justify-center items-center px-10 ">
        <div className="flex w-full justify-center p-5">
          <span>(800)555-1234</span>
        </div>
        <div className="flex w-full justify-center p-5">
          <span>contact.us@email.com</span>
        </div>
        <div className="flex w-full p-5">
          <div className="flex flex-col items-center">
            <p>1234 This Street</p>
            <p>AnyTown, AnyState 12345</p>
          </div>
        </div>
      </div>
      <div className="flex content-center h-3/4 w-1/4 relative">
        <Image
          src="/contact-us.jpg"
          alt="heart in envelope"
          fill
          className="object-cover"
        />
      </div>
    </footer>
  );
}
