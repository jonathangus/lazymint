import axios from 'axios';
import { NextApiHandler } from 'next';
import { ethers } from 'ethers';

const handler: NextApiHandler = async (req, res) => {
  let address;
  try {
    address = ethers.utils.getAddress(req.query.address as string);
  } catch (e) {
    return res.status(500).send("missing 'address' param");
  }
  const eventId = process.env.POAP_EVENT_ID || '77557';
  const url = `https://api.poap.tech/actions/scan/${address}/${eventId}`;

  try {
    const { data } = await axios.get(url, {
      headers: {
        ['X-API-Key']: process.env.POAP_SECRET,
      },
    });

    res.status(200).send({
      success: Boolean(data.tokenId),
    });
  } catch (e) {
    res.status(200).send({
      success: false,
    });
  }
};

export default handler;
