import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CustomCardHeader } from "@/pages/Landing/components/CustomCard/CustomCardHeader";
import { TestimonialType } from "@/types/general";

type Props = {
  testimonial: TestimonialType;
};

export const TestimonialHeader: React.FC<Props> = ({ testimonial }) => {
  const testimonialHeader = (
    <Avatar className="h-10 w-10">
      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
      <AvatarFallback>
        {testimonial.name
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
  );

  const testimonialBody = (
    <div className="ml-4">
      <div className="font-semibold">{testimonial.name}</div>
      <div className="text-sm text-gray-500">{testimonial.role}</div>
    </div>
  );

  return (
    <CustomCardHeader Icon={testimonialHeader} children={testimonialBody} />
  );
};
