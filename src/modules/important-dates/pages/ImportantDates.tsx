import React from 'react';
import { MdHowToReg, MdDescription, MdMarkEmailRead, MdEvent } from 'react-icons/md';

interface Dates {
  id: number;
  title: string;
  date: string;
  strikethrough?: Array<string>;
  icon: React.ReactNode;
}

const dates: Dates[] = [
  {
    id: 1,
    title: 'Abstract Submission Deadline',
    date: '24 November, 2025',
    icon: <MdDescription className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
  },
  {
    id: 2,
    title: 'Notification of Acceptance',
    date: '27 November, 2025',
    icon: <MdMarkEmailRead className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
  },
  {
    id: 3,
    title: 'Registration Deadline',
    date: '7 December, 2025',
    strikethrough: ['Early Bird: 2 December, 2025'],
    icon: <MdHowToReg className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
  },
  {
    id: 4,
    title: 'Conference Date',
    date: '13 December, 2025',
    icon: <MdEvent className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
  },
];

export default function ImportantDatesPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background to-secondary pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-20 lg:pb-24">
      <div className="px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
              Important Dates
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              1st International Conference on Environmental Sustainability and Green Earth
              (ICESGE-2025)
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mx-auto">
            {/* Desktop Timeline - Vertical Center Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />

            {/* Timeline Items */}
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {dates.map((item, index) => (
                <div key={item.id} className="relative">
                  {/* Mobile & Tablet Layout (Left-aligned) */}
                  <div className="md:hidden">
                    <div className="flex items-start gap-4 sm:gap-6">
                      {/* Icon & Timeline Dot */}
                      <div className="relative flex-shrink-0">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary relative z-10">
                          {item.icon}
                        </div>
                        {/* Connecting Line */}
                        {index !== dates.length - 1 && (
                          <div className="absolute left-1/2 top-full transform -translate-x-1/2 w-0.5 h-8 sm:h-10 bg-primary/20" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <div className="bg-card/80 backdrop-blur-sm p-4 sm:p-5 rounded-xl shadow-lg border border-border hover:border-ring hover:shadow-xl transition-all duration-300">
                          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                            {item.title}
                          </h3>
                          {item.strikethrough ? (
                            <>
                              {item.strikethrough.map((date, i) => (
                                <p
                                  key={i}
                                  className={`${
                                    item.title === 'Registration Deadline'
                                      ? 'text-xs text-muted-foreground opacity-75'
                                      : 'text-xs sm:text-sm text-muted-foreground line-through'
                                  } mb-1`}
                                >
                                  {date}
                                </p>
                              ))}
                              <p className="text-sm sm:text-base text-primary font-semibold">
                                {item.title === 'Registration Deadline'
                                  ? `Regular: ${item.date}`
                                  : item.date}
                              </p>
                            </>
                          ) : (
                            <p className="text-sm sm:text-base text-primary font-semibold">
                              {item.date}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout (Alternating) */}
                  <div
                    className={`hidden md:flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`w-5/12 ${
                        index % 2 === 0 ? 'pr-8 lg:pr-12 text-right' : 'pl-8 lg:pl-12 text-left'
                      }`}
                    >
                      <div className="bg-card/80 backdrop-blur-sm p-5 lg:p-6 rounded-xl shadow-lg border border-border hover:border-ring hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div
                          className={`flex items-center gap-3 mb-3 ${
                            index % 2 === 0
                              ? 'flex-row-reverse justify-start'
                              : 'flex-row justify-start'
                          }`}
                        >
                          <div className="flex-shrink-0">{item.icon}</div>
                        </div>
                        <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        {item.strikethrough ? (
                          <>
                            {item.strikethrough.map((date, i) => (
                              <p
                                key={i}
                                className={`${
                                  item.title === 'Registration Deadline'
                                    ? 'text-xs lg:text-sm text-muted-foreground opacity-75'
                                    : 'text-sm lg:text-base text-muted-foreground line-through'
                                } mb-1`}
                              >
                                {date}
                              </p>
                            ))}
                            <p className="text-sm lg:text-base text-primary font-semibold">
                              {item.title === 'Registration Deadline'
                                ? `Regular: ${item.date}`
                                : item.date}
                            </p>
                          </>
                        ) : (
                          <p className="text-sm lg:text-base text-primary font-semibold">
                            {item.date}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Center Timeline Dot */}
                    <div className="w-2/12 flex justify-center relative z-10">
                      <div className="w-5 h-5 lg:w-6 lg:h-6 bg-primary rounded-full border-4 border-background shadow-lg" />
                    </div>

                    {/* Empty Space */}
                    <div className="w-5/12" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
