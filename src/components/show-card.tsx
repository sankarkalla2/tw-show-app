import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

const ShowCard = ({ data }: any) => {
  console.log(data);
  return (
    <Card className="py-0">
      <>
        <div className="">
          <img
            src={data.show?.image?.medium}
            alt="image"
            className="rounded-md w-full"
          />
        </div>
      </>
      <CardHeader className="py-3">
        <CardTitle>{data && data.show.name}</CardTitle>

        {/* <CardDescription className="">
          <div
          dangerouslySetInnerHTML={{ __html: data.show?.summary }}
          className="overflow-hidden max-h-10 text-ellipsis"
          ></div>
        </CardDescription> */}
      </CardHeader>
      <CardContent className="w-full px-2 pt-0">
        <div className="flex items-center justify-start gap-x-2 pt-0">
          {data &&
            data.show?.genres.map((genre: string) => (
              <Button
                key={data.show.id}
                className=""
                size="sm"
                variant="outline"
              >
                {genre}
              </Button>
            ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ShowCard;
