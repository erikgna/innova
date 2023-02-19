export const Loading = () => {
  return (
    <section className="flex flex-col px-2 bg-gray-800 w-full min-h-screen pt-16">
      <div className="p-4 max-w-2xl w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1">
            <div className="h-5 bg-gray-500 rounded mb-10"></div>
            <div className="h-5 bg-gray-500 rounded mb-10"></div>
            <div className="h-5 bg-gray-500 rounded mb-10"></div>
            <div className="h-5 bg-gray-500 rounded mb-10"></div>
            <div className="h-5 bg-gray-500 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
