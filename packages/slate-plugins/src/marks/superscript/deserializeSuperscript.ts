import { DeserializeHtml } from '@udecode/core';
import { getLeafDeserializer } from '../../common/utils/getLeafDeserializer';
import { MARK_SUPERSCRIPT, SuperscriptDeserializeOptions } from './types';

export const deserializeSuperscript = ({
  typeSuperscript = MARK_SUPERSCRIPT,
}: SuperscriptDeserializeOptions = {}): DeserializeHtml => ({
  leaf: getLeafDeserializer(typeSuperscript, { tagNames: ['SUP'] }),
});
