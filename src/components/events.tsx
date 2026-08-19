export default function Events() {
  return (
    <div className="relative w-full h-screen border-b px-4 border-gray-200 overflow-hidden">
      <div
        className="relative w-full flex flex-col h-full items-start max-w-350
            sm:pt-10 border-gray-200 pb-20 sm:pb-32 mx-auto border-x p-4 sm:px-6"
      >
        <div className="flex w-full gap-6">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Heading */}
            <div className="flex  mb-5 items-center gap-4">
              <div className="whitespace-nowrap sm:text-4xl text-2xl lora">
                Events
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
