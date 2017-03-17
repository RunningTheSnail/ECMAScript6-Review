/**
 * Created by toonew on 2017/3/17.
 */

import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

export default mongoose;

