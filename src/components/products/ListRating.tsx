"use client";

import moment from "moment";
import Heading from "./Heading";
import { Rating } from "@mui/material";

const ListRating = ({ product }: any) => {
  return (
    <div>
      <Heading title="Product Reviews" />
      <div className="text-sm mt-2">
        {product.reviews.map((item: any) => (
          <div key={item.id} className="max-w-[300px]">
            <div className="flex gap-2 items-center">
              {/* AVATAR */}
              <div className="font-semibold">{item?.user.name}</div>
              <div className="font-light">
                {moment(item.createdDate).fromNow()}
              </div>
            </div>
            <div className="mt-2">
              <Rating value={item.rating} readOnly />
              <div className="ml-2">{item.comment}</div>
              <hr className="mt-4 mb-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListRating;
