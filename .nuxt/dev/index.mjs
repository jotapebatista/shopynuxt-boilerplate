import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, getRequestURL, getResponseHeader, getQuery as getQuery$1, readBody, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getResponseStatus, createError, getRouterParam, getCookie, readMultipartFormData, getHeader, getResponseStatusText } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/h3/dist/index.mjs';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { escapeHtml } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/@vue/shared/dist/shared.cjs.js';
import { z } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/zod/lib/index.mjs';
import { PrismaClient, OrderStatus } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/@prisma/client/default.js';
import { v2 } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/cloudinary/cloudinary.js';
import nodemailer from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/nodemailer/lib/nodemailer.js';
import bcrypt from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/bcryptjs/index.js';
import { hash as hash$1 } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/bcrypt/bcrypt.js';
import Stripe from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/stripe/esm/stripe.esm.node.js';
import jwt from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/jsonwebtoken/index.js';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, joinRelativeURL } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/ufo/dist/index.mjs';
import { renderToString } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/vue/server-renderer/index.mjs';
import destr, { destr as destr$1 } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/unstorage/drivers/fs.mjs';
import { digest } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/scule/dist/index.mjs';
import { getContext } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/youch-core/build/index.js';
import { Youch } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/source-map/source-map.js';
import { AsyncLocalStorage } from 'node:async_hooks';
import { stringify, uneval } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/devalue/index.js';
import { captureRawStackTrace, parseRawStackTrace } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/errx/dist/index.js';
import { isVNode, toValue, isRef } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/vue/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/unhead/dist/server.mjs';
import { DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/unhead/dist/plugins.mjs';
import { walkResolver } from 'file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/node_modules/unhead/dist/utils.mjs';

const serverAssets = [{"baseName":"server","dir":"/Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate","watchOptions":{"ignored":[null]}}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/server","watchOptions":{"ignored":[null]}}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/.nuxt"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/.nuxt/cache"}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "apiBase": "http://localhost:3000",
    "stripePublishableKey": "pk_test_51RQvymGdeDzQMO6gq96oXROjcqr3j3o4Ffqa8zSlcNKDu6dL8lVY5R7PXv9fPAz5sIhp3xiJsxzFPOejL58yXXmK00xBTofYrN"
  },
  "jwtSecret": "shopynuxt-secure-jwt-secret-key-2024",
  "stripeSecretKey": "sk_test_51RQvymGdeDzQMO6g9mQFxCibcjLBTJwXYwXBt1FxUGuAOmj5aY57WjVC3Oom7LfVg434pkJ7bMqKuLkb1ZYurBKd008IAu1NTm"
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

const config$1 = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config$1.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
  if (event.handled || isJsonRequest(event)) {
    return;
  }
  const defaultRes = await defaultHandler(error, event, { json: true });
  const statusCode = error.statusCode || 500;
  if (statusCode === 404 && defaultRes.status === 302) {
    setResponseHeaders(event, defaultRes.headers);
    setResponseStatus(event, defaultRes.status, defaultRes.statusText);
    return send(event, JSON.stringify(defaultRes.body, null, 2));
  }
  if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
    defaultRes.body.stack = defaultRes.body.stack.join("\n");
  }
  const errorObject = defaultRes.body;
  const url = new URL(errorObject.url);
  errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
  errorObject.message ||= "Server Error";
  errorObject.data ||= error.data;
  errorObject.statusMessage ||= error.statusMessage;
  delete defaultRes.headers["content-type"];
  delete defaultRes.headers["content-security-policy"];
  setResponseHeaders(event, defaultRes.headers);
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (event.handled) {
    return;
  }
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json || !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _j6WIQtQEoKgeyKIdVk_kTdFWF03HCKjfEgK2gopDGS0 = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const rootDir = "/Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate";

const appHead = {"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"description","content":"A modern e-commerce starter template built with Nuxt 3"}],"link":[{"rel":"icon","type":"image/x-icon","href":"/favicon.ico"}],"style":[],"script":[],"noscript":[],"title":"Shopynuxt"};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appId = "nuxt-app";

const devReducers = {
  VNode: (data) => isVNode(data) ? { type: data.type, props: data.props } : void 0,
  URL: (data) => data instanceof URL ? data.toString() : void 0
};
const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _3aKp3wl78n3_jk8uWco3EaYiyPrC7KfbcKeUneyYo = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const rawStack = captureRawStackTrace();
    if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const trace = [];
    let filename = "";
    for (const entry of parseRawStackTrace(rawStack)) {
      if (entry.source === globalThis._importMeta_.url) {
        continue;
      }
      if (EXCLUDE_TRACE_RE.test(entry.source)) {
        continue;
      }
      filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
      trace.push({
        ...entry,
        source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
      });
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename,
      // Clean up file names in stack trace
      stack: trace
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    try {
      const reducers = Object.assign(/* @__PURE__ */ Object.create(null), devReducers, ctx.event.context._payloadReducers);
      htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
    } catch (e) {
      const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
      console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.`);
    }
  });
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
  consola$1.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola$1.wrapConsole();
}

const plugins = [
  _j6WIQtQEoKgeyKIdVk_kTdFWF03HCKjfEgK2gopDGS0,
_3aKp3wl78n3_jk8uWco3EaYiyPrC7KfbcKeUneyYo
];

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
  disableCapoSorting: false,
  plugins: [DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin],
};

function createSSRContext(event) {
  const ssrContext = {
    url: event.path,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || (false),
    head: createHead(unheadOptions),
    error: false,
    nuxt: void 0,
    /* NuxtApp */
    payload: {},
    _payloadReducers: /* @__PURE__ */ Object.create(null),
    modules: /* @__PURE__ */ new Set()
  };
  return ssrContext;
}
function setSSRError(ssrContext, error) {
  ssrContext.error = true;
  ssrContext.payload = { error };
  ssrContext.url = error.url;
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const getServerEntry = () => import('file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getClientManifest = () => import('file:///Users/joaobatista/Documents/GitRepos/shopynuxt-starter-boilerplate/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
    {
      return APP_ROOT_OPEN_TAG + r + APP_ROOT_CLOSE_TAG;
    }
  });
  const options = {
    manifest,
    renderToString: () => spaTemplate,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules ||= /* @__PURE__ */ new Set();
    ssrContext.payload.serverRendered = false;
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function getRenderer(ssrContext) {
  return ssrContext.noSSR ? getSPARenderer() : getSSRRenderer();
}
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap && styleMap[mod]) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
function getServerComponentHTML(body) {
  const match = body.match(ROOT_NODE_REGEX);
  return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
    response[name] = {
      ...slot,
      fallback: ssrContext.teleports?.[`island-fallback=${name}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
    const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
    response[clientUid] = {
      ...component,
      html,
      slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, id, slot] = match;
      if (!slot || clientUid !== id) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const ISLAND_SUFFIX_RE = /\.json(\?.*)?$/;
const _SxA8c9 = defineEventHandler(async (event) => {
  const nitroApp = useNitroApp();
  setResponseHeaders(event, {
    "content-type": "application/json;charset=utf-8",
    "x-powered-by": "Nuxt"
  });
  const islandContext = await getIslandContext(event);
  const ssrContext = {
    ...createSSRContext(event),
    islandContext,
    noSSR: false,
    url: islandContext.url
  };
  const renderer = await getSSRRenderer();
  const renderResult = await renderer.renderToString(ssrContext).catch(async (error) => {
    await ssrContext.nuxt?.hooks.callHook("app:error", error);
    throw error;
  });
  const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult });
  if (inlinedStyles.length) {
    ssrContext.head.push({ style: inlinedStyles });
  }
  {
    const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
    const link = [];
    for (const resource of Object.values(styles)) {
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      if (resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
      }
    }
    if (link.length) {
      ssrContext.head.push({ link }, { mode: "server" });
    }
  }
  const islandHead = {};
  for (const entry of ssrContext.head.entries.values()) {
    for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
      const currentValue = islandHead[key];
      if (Array.isArray(currentValue)) {
        currentValue.push(...value);
      }
      islandHead[key] = value;
    }
  }
  islandHead.link ||= [];
  islandHead.style ||= [];
  const islandResponse = {
    id: islandContext.id,
    head: islandHead,
    html: getServerComponentHTML(renderResult.html),
    components: getClientIslandResponse(ssrContext),
    slots: getSlotIslandResponse(ssrContext)
  };
  await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
  return islandResponse;
});
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr$1(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}

const _lazy_hAKG0V = () => Promise.resolve().then(function () { return _id__delete$b; });
const _lazy_OXYjhF = () => Promise.resolve().then(function () { return _id__put$7; });
const _lazy_cThw2C = () => Promise.resolve().then(function () { return index_get$f; });
const _lazy_FTP_jK = () => Promise.resolve().then(function () { return index_post$d; });
const _lazy_IKHH_1 = () => Promise.resolve().then(function () { return stats$1; });
const _lazy_8cWMus = () => Promise.resolve().then(function () { return upload$1; });
const _lazy_Gewg6V = () => Promise.resolve().then(function () { return forgotPassword_post$1; });
const _lazy_RCqw4i = () => Promise.resolve().then(function () { return login_post$1; });
const _lazy_T26El2 = () => Promise.resolve().then(function () { return register_post$1; });
const _lazy_JUafXb = () => Promise.resolve().then(function () { return resetPassword_post$1; });
const _lazy_Q6LLrc = () => Promise.resolve().then(function () { return validate_get$1; });
const _lazy_rBwa9V = () => Promise.resolve().then(function () { return clear_post$1; });
const _lazy_6uiCLP = () => Promise.resolve().then(function () { return index_get$d; });
const _lazy_v5hTnd = () => Promise.resolve().then(function () { return _id__delete$9; });
const _lazy_5sI_qT = () => Promise.resolve().then(function () { return _id__put$5; });
const _lazy_TuBx3h = () => Promise.resolve().then(function () { return index_post$b; });
const _lazy_SjHmgn = () => Promise.resolve().then(function () { return _id__delete$7; });
const _lazy_lErNeq = () => Promise.resolve().then(function () { return _id__get$5; });
const _lazy_At035m = () => Promise.resolve().then(function () { return _id__put$3; });
const _lazy_qS8WJu = () => Promise.resolve().then(function () { return index_get$b; });
const _lazy_QNgv8C = () => Promise.resolve().then(function () { return index_post$9; });
const _lazy_ZK8pjp = () => Promise.resolve().then(function () { return _id__get$3; });
const _lazy_KiA1vd = () => Promise.resolve().then(function () { return _id__patch$1; });
const _lazy_hby7w4 = () => Promise.resolve().then(function () { return index_get$9; });
const _lazy_T4GwVi = () => Promise.resolve().then(function () { return index_post$7; });
const _lazy_4iOD8I = () => Promise.resolve().then(function () { return _id__get$1; });
const _lazy_uE7DAu = () => Promise.resolve().then(function () { return createIntent_post$1; });
const _lazy_m75t2m = () => Promise.resolve().then(function () { return _slug__delete$1; });
const _lazy_uTXDou = () => Promise.resolve().then(function () { return _slug__get$1; });
const _lazy_vXwxfk = () => Promise.resolve().then(function () { return _slug__put$1; });
const _lazy_Rs7SJo = () => Promise.resolve().then(function () { return index_get$7; });
const _lazy_aXZhaF = () => Promise.resolve().then(function () { return index_post$5; });
const _lazy_miitcf = () => Promise.resolve().then(function () { return index_get$5; });
const _lazy_A5rdRj = () => Promise.resolve().then(function () { return index_put$1; });
const _lazy_X6xpMK = () => Promise.resolve().then(function () { return _id__delete$5; });
const _lazy_oY3n3u = () => Promise.resolve().then(function () { return _id__put$1; });
const _lazy_zAUUKn = () => Promise.resolve().then(function () { return toggle_post$1; });
const _lazy_ljdPMs = () => Promise.resolve().then(function () { return changePassword_post$1; });
const _lazy_PDATuB = () => Promise.resolve().then(function () { return index_get$3; });
const _lazy_oveOER = () => Promise.resolve().then(function () { return index_post$3; });
const _lazy_KUgG8K = () => Promise.resolve().then(function () { return me_get$1; });
const _lazy_90S37m = () => Promise.resolve().then(function () { return me_put$1; });
const _lazy_GVtJpH = () => Promise.resolve().then(function () { return _id__delete$3; });
const _lazy_Fy2mnB = () => Promise.resolve().then(function () { return index_get$1; });
const _lazy_Xgve1A = () => Promise.resolve().then(function () { return _id__delete$1; });
const _lazy_c84e03 = () => Promise.resolve().then(function () { return index_post$1; });
const _lazy_eP49Ii = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/api/addresses/:id', handler: _lazy_hAKG0V, lazy: true, middleware: false, method: "delete" },
  { route: '/api/addresses/:id', handler: _lazy_OXYjhF, lazy: true, middleware: false, method: "put" },
  { route: '/api/addresses', handler: _lazy_cThw2C, lazy: true, middleware: false, method: "get" },
  { route: '/api/addresses', handler: _lazy_FTP_jK, lazy: true, middleware: false, method: "post" },
  { route: '/api/admin/stats', handler: _lazy_IKHH_1, lazy: true, middleware: false, method: undefined },
  { route: '/api/admin/upload', handler: _lazy_8cWMus, lazy: true, middleware: false, method: undefined },
  { route: '/api/auth/forgot-password', handler: _lazy_Gewg6V, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/login', handler: _lazy_RCqw4i, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/register', handler: _lazy_T26El2, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/reset-password', handler: _lazy_JUafXb, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/validate', handler: _lazy_Q6LLrc, lazy: true, middleware: false, method: "get" },
  { route: '/api/cart/clear', handler: _lazy_rBwa9V, lazy: true, middleware: false, method: "post" },
  { route: '/api/cart', handler: _lazy_6uiCLP, lazy: true, middleware: false, method: "get" },
  { route: '/api/cart/items/:id', handler: _lazy_v5hTnd, lazy: true, middleware: false, method: "delete" },
  { route: '/api/cart/items/:id', handler: _lazy_5sI_qT, lazy: true, middleware: false, method: "put" },
  { route: '/api/cart/items', handler: _lazy_TuBx3h, lazy: true, middleware: false, method: "post" },
  { route: '/api/categories/:id', handler: _lazy_SjHmgn, lazy: true, middleware: false, method: "delete" },
  { route: '/api/categories/:id', handler: _lazy_lErNeq, lazy: true, middleware: false, method: "get" },
  { route: '/api/categories/:id', handler: _lazy_At035m, lazy: true, middleware: false, method: "put" },
  { route: '/api/categories', handler: _lazy_qS8WJu, lazy: true, middleware: false, method: "get" },
  { route: '/api/categories', handler: _lazy_QNgv8C, lazy: true, middleware: false, method: "post" },
  { route: '/api/orders/:id', handler: _lazy_ZK8pjp, lazy: true, middleware: false, method: "get" },
  { route: '/api/orders/:id', handler: _lazy_KiA1vd, lazy: true, middleware: false, method: "patch" },
  { route: '/api/orders', handler: _lazy_hby7w4, lazy: true, middleware: false, method: "get" },
  { route: '/api/orders', handler: _lazy_T4GwVi, lazy: true, middleware: false, method: "post" },
  { route: '/api/payments/:id', handler: _lazy_4iOD8I, lazy: true, middleware: false, method: "get" },
  { route: '/api/payments/create-intent', handler: _lazy_uE7DAu, lazy: true, middleware: false, method: "post" },
  { route: '/api/products/:slug', handler: _lazy_m75t2m, lazy: true, middleware: false, method: "delete" },
  { route: '/api/products/:slug', handler: _lazy_uTXDou, lazy: true, middleware: false, method: "get" },
  { route: '/api/products/:slug', handler: _lazy_vXwxfk, lazy: true, middleware: false, method: "put" },
  { route: '/api/products', handler: _lazy_Rs7SJo, lazy: true, middleware: false, method: "get" },
  { route: '/api/products', handler: _lazy_aXZhaF, lazy: true, middleware: false, method: "post" },
  { route: '/api/settings', handler: _lazy_miitcf, lazy: true, middleware: false, method: "get" },
  { route: '/api/settings', handler: _lazy_A5rdRj, lazy: true, middleware: false, method: "put" },
  { route: '/api/users/:id', handler: _lazy_X6xpMK, lazy: true, middleware: false, method: "delete" },
  { route: '/api/users/:id', handler: _lazy_oY3n3u, lazy: true, middleware: false, method: "put" },
  { route: '/api/users/:id/toggle', handler: _lazy_zAUUKn, lazy: true, middleware: false, method: "post" },
  { route: '/api/users/change-password', handler: _lazy_ljdPMs, lazy: true, middleware: false, method: "post" },
  { route: '/api/users', handler: _lazy_PDATuB, lazy: true, middleware: false, method: "get" },
  { route: '/api/users', handler: _lazy_oveOER, lazy: true, middleware: false, method: "post" },
  { route: '/api/users/me', handler: _lazy_KUgG8K, lazy: true, middleware: false, method: "get" },
  { route: '/api/users/me', handler: _lazy_90S37m, lazy: true, middleware: false, method: "put" },
  { route: '/api/wishlist/:id', handler: _lazy_GVtJpH, lazy: true, middleware: false, method: "delete" },
  { route: '/api/wishlist', handler: _lazy_Fy2mnB, lazy: true, middleware: false, method: "get" },
  { route: '/api/wishlist/items/:id', handler: _lazy_Xgve1A, lazy: true, middleware: false, method: "delete" },
  { route: '/api/wishlist/items', handler: _lazy_c84e03, lazy: true, middleware: false, method: "post" },
  { route: '/__nuxt_error', handler: _lazy_eP49Ii, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_eP49Ii, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(nodeHandler, aRequest);
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = { "appName": "Nuxt", "version": "", "statusCode": 500, "statusMessage": "Server error", "description": "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.", "stack": "" };
const template$1 = (messages) => {
  messages = { ..._messages, ...messages };
  return '<!DOCTYPE html><html lang="en"><head><title>' + escapeHtml(messages.statusCode) + " - " + escapeHtml(messages.statusMessage || "Internal Server Error") + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport"><style>.spotlight{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.pointer-events-none{pointer-events:none}.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.z-10{z-index:10}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.h-auto{height:auto}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.overflow-y-auto{overflow-y:auto}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.bg-black\\/5{background-color:#0000000d}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.text-6xl{font-size:3.75rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:bg-white\\/10{background-color:#ffffff1a}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-8xl{font-size:6rem;line-height:1}}</style><script>!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();<\/script></head><body class="antialiased bg-white dark:bg-black dark:text-white flex flex-col font-sans min-h-screen pt-14 px-10 text-black"><div class="fixed left-0 pointer-events-none right-0 spotlight"></div><h1 class="font-medium mb-6 sm:text-8xl text-6xl">` + escapeHtml(messages.statusCode) + '</h1><p class="font-light leading-tight mb-8 sm:text-2xl text-xl">' + escapeHtml(messages.description) + '</p><div class="bg-black/5 bg-white dark:bg-white/10 flex-1 h-auto overflow-y-auto rounded-t-md"><div class="font-light leading-tight p-8 text-xl z-10">' + escapeHtml(messages.stack) + "</div></div></body></html>";
};

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: styles
});

const config = {
  appUrl: process.env.APP_URL || "http://localhost:3000",
  jwtSecret: process.env.JWT_SECRET || "shopynuxt-secure-jwt-secret-key-2024",
  smtp: {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    user: process.env.SMTP_USER || "",
    password: process.env.SMTP_PASSWORD || "",
    from: process.env.SMTP_FROM || "noreply@shopynuxt.com"
  }
};

const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET || config.jwtSecret;
  return secret;
};
const generateToken = (payload, expiresIn = "7d") => {
  const secret = getJwtSecret();
  return jwt.sign(payload, secret, { expiresIn });
};
const verifyToken = (token) => {
  const secret = getJwtSecret();
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    return null;
  }
};

const prisma$2 = new PrismaClient();

const _id__delete$a = defineEventHandler(async (event) => {
  var _a;
  try {
    const authHeader = getRequestHeader(event, "Authorization");
    if (!(authHeader == null ? void 0 : authHeader.startsWith("Bearer "))) {
      throw createError({
        statusCode: 401,
        message: "Unauthorized"
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = await verifyToken(token);
    if (!decoded) {
      throw createError({
        statusCode: 401,
        message: "Invalid token"
      });
    }
    const id = (_a = event.context.params) == null ? void 0 : _a.id;
    if (!id) {
      throw createError({
        statusCode: 400,
        message: "Address ID is required"
      });
    }
    const address = await prisma$2.address.findFirst({
      where: {
        id,
        userId: decoded.id
      }
    });
    if (!address) {
      throw createError({
        statusCode: 404,
        message: "Address not found"
      });
    }
    const ordersUsingAddress = await prisma$2.order.findMany({
      where: {
        shippingAddress: {
          id
        },
        status: {
          notIn: ["DELIVERED", "CANCELLED"]
        }
      }
    });
    if (ordersUsingAddress.length > 0) {
      throw createError({
        statusCode: 400,
        message: "Cannot delete address because it is being used in active orders. You can delete this address once all orders are completed."
      });
    }
    try {
      await prisma$2.address.delete({
        where: { id }
      });
      if (address.isDefault) {
        const nextAddress = await prisma$2.address.findFirst({
          where: { userId: decoded.id }
        });
        if (nextAddress) {
          await prisma$2.address.update({
            where: { id: nextAddress.id },
            data: { isDefault: true }
          });
        }
      }
      return { message: "Address deleted successfully" };
    } catch (error) {
      if (error.code === "P2003") {
        throw createError({
          statusCode: 400,
          message: "Cannot delete address because it is being used in existing orders. You can delete this address once all orders are completed."
        });
      }
      throw error;
    }
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "An unexpected error occurred. Please try again later."
    });
  }
});

const _id__delete$b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__delete$a
});

const addressSchema$1 = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  street: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  zipCode: z.string().min(1),
  country: z.string().min(1),
  isDefault: z.boolean().optional()
});
const _id__put$6 = defineEventHandler(async (event) => {
  var _a;
  try {
    const authHeader = getRequestHeader(event, "Authorization");
    if (!(authHeader == null ? void 0 : authHeader.startsWith("Bearer "))) {
      throw createError({
        statusCode: 401,
        message: "Unauthorized"
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = await verifyToken(token);
    if (!decoded) {
      throw createError({
        statusCode: 401,
        message: "Invalid token"
      });
    }
    const id = (_a = event.context.params) == null ? void 0 : _a.id;
    if (!id) {
      throw createError({
        statusCode: 400,
        message: "Address ID is required"
      });
    }
    const body = await readBody(event);
    const validatedData = addressSchema$1.parse(body);
    const existingAddress = await prisma$2.address.findFirst({
      where: {
        id,
        userId: decoded.id
      }
    });
    if (!existingAddress) {
      throw createError({
        statusCode: 404,
        message: "Address not found"
      });
    }
    if (validatedData.isDefault) {
      await prisma$2.address.updateMany({
        where: {
          userId: decoded.id,
          id: { not: id }
        },
        data: { isDefault: false }
      });
    }
    const updatedAddress = await prisma$2.address.update({
      where: { id },
      data: validatedData
    });
    return updatedAddress;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw createError({
        statusCode: 400,
        message: error.errors[0].message
      });
    }
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const _id__put$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__put$6
});

const index_get$e = defineEventHandler(async (event) => {
  try {
    const authHeader = getRequestHeader(event, "Authorization");
    if (!(authHeader == null ? void 0 : authHeader.startsWith("Bearer "))) {
      throw createError({
        statusCode: 401,
        message: "Unauthorized"
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = await verifyToken(token);
    if (!decoded) {
      throw createError({
        statusCode: 401,
        message: "Invalid token"
      });
    }
    const addresses = await prisma$2.address.findMany({
      where: { userId: decoded.id },
      orderBy: { isDefault: "desc" }
    });
    return addresses;
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const index_get$f = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get$e
});

const addressSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  street: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  zipCode: z.string().min(1),
  country: z.string().min(1),
  isDefault: z.boolean().optional()
});
const index_post$c = defineEventHandler(async (event) => {
  try {
    const authHeader = getRequestHeader(event, "Authorization");
    if (!(authHeader == null ? void 0 : authHeader.startsWith("Bearer "))) {
      throw createError({
        statusCode: 401,
        message: "Unauthorized"
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = await verifyToken(token);
    if (!decoded) {
      throw createError({
        statusCode: 401,
        message: "Invalid token"
      });
    }
    const body = await readBody(event);
    const validatedData = addressSchema.parse(body);
    if (validatedData.isDefault) {
      await prisma$2.address.updateMany({
        where: { userId: decoded.id },
        data: { isDefault: false }
      });
    }
    const address = await prisma$2.address.create({
      data: {
        ...validatedData,
        userId: decoded.id
      }
    });
    return address;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw createError({
        statusCode: 400,
        message: error.errors[0].message
      });
    }
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const index_post$d = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_post$c
});

const prisma$1 = new PrismaClient();
const stats = defineEventHandler(async (event) => {
  try {
    const token = getCookie(event, "auth_token");
    if (!token) {
      throw createError({
        statusCode: 401,
        message: "Unauthorized"
      });
    }
    const response = await $fetch("/api/auth/validate", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    if (!response || response.role !== "ADMIN") {
      throw createError({
        statusCode: 403,
        message: "Unauthorized"
      });
    }
    const totalOrders = await prisma$1.order.count();
    const totalUsers = await prisma$1.user.count({
      where: {
        role: "USER"
      }
    });
    const totalProducts = await prisma$1.product.count();
    const orders = await prisma$1.order.findMany({
      where: {
        status: "DELIVERED"
      },
      select: {
        total: true
      }
    });
    const totalRevenue = orders.reduce((sum, order) => sum + Number(order.total), 0);
    const recentOrders = await prisma$1.order.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc"
      },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true
          }
        }
      }
    });
    const ordersByStatus = await prisma$1.order.groupBy({
      by: ["status"],
      _count: true
    });
    const sixMonthsAgo = /* @__PURE__ */ new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    const revenueByMonth = await prisma$1.order.findMany({
      where: {
        status: "DELIVERED",
        createdAt: {
          gte: sixMonthsAgo
        }
      },
      select: {
        total: true,
        createdAt: true
      },
      orderBy: {
        createdAt: "asc"
      }
    });
    const monthlyRevenue = revenueByMonth.reduce((acc, order) => {
      const month = order.createdAt.toISOString().slice(0, 7);
      acc[month] = (acc[month] || 0) + Number(order.total);
      return acc;
    }, {});
    const topProducts = await prisma$1.orderItem.groupBy({
      by: ["productId"],
      _sum: {
        quantity: true
      },
      orderBy: {
        _sum: {
          quantity: "desc"
        }
      },
      take: 5
    });
    const topProductDetails = await Promise.all(
      topProducts.map(async (item) => {
        const product = await prisma$1.product.findUnique({
          where: { id: item.productId },
          select: { name: true }
        });
        return {
          name: (product == null ? void 0 : product.name) || "Unknown",
          quantity: item._sum.quantity || 0
        };
      })
    );
    return {
      stats: {
        totalOrders,
        totalUsers,
        totalProducts,
        totalRevenue: totalRevenue.toFixed(2)
      },
      recentOrders: recentOrders.map((order) => ({
        id: order.id,
        customer: `${order.user.firstName} ${order.user.lastName}`,
        status: order.status,
        total: order.total,
        date: order.createdAt.toISOString().split("T")[0]
      })),
      ordersByStatus: ordersByStatus.map((item) => ({
        status: item.status,
        count: item._count
      })),
      revenueByMonth: Object.entries(monthlyRevenue).map(([month, revenue]) => ({
        month,
        revenue: Number(revenue.toFixed(2))
      })),
      topProducts: topProductDetails
    };
  } catch (error) {
    console.error("Error fetching admin stats:", error);
    throw createError({
      statusCode: 500,
      message: "Error fetching admin stats"
    });
  }
});

const stats$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: stats
});

v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
const upload = defineEventHandler(async (event) => {
  var _a;
  try {
    const token = getCookie(event, "auth_token");
    if (!token) {
      throw createError({
        statusCode: 401,
        message: "Unauthorized"
      });
    }
    const response = await $fetch("/api/auth/validate", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    if (!response || response.role !== "ADMIN") {
      throw createError({
        statusCode: 403,
        message: "Unauthorized"
      });
    }
    const formData = await readMultipartFormData(event);
    if (!formData || !formData[0]) {
      throw createError({
        statusCode: 400,
        message: "No file uploaded"
      });
    }
    const file = formData[0];
    if (!((_a = file.type) == null ? void 0 : _a.startsWith("image/"))) {
      throw createError({
        statusCode: 400,
        message: "File must be an image"
      });
    }
    const base64Image = file.data.toString("base64");
    const dataURI = `data:${file.type};base64,${base64Image}`;
    const result = await new Promise((resolve, reject) => {
      v2.uploader.upload(dataURI, {
        folder: "shopynuxt/products",
        resource_type: "auto"
      }, (error, result2) => {
        if (error) reject(error);
        else resolve(result2);
      });
    });
    return {
      url: result.secure_url,
      publicId: result.public_id
    };
  } catch (error) {
    console.error("Error uploading image:", error);
    throw createError({
      statusCode: 500,
      message: "Error uploading image"
    });
  }
});

const upload$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: upload
});

const transporter = nodemailer.createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  secure: config.smtp.secure,
  auth: {
    user: config.smtp.user,
    pass: config.smtp.password
  }
});
const sendEmail = async ({ to, subject, html }) => {
  try {
    const info = await transporter.sendMail({
      from: config.smtp.from,
      to,
      subject,
      html
    });
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};
const sendPasswordResetEmail = async (email, resetToken) => {
  const resetUrl = `${config.appUrl}/auth/reset-password?token=${resetToken}`;
  const html = `
    <h1>Password Reset Request</h1>
    <p>You requested to reset your password. Click the link below to set a new password:</p>
    <p><a href="${resetUrl}">Reset Password</a></p>
    <p>If you didn't request this, you can safely ignore this email.</p>
    <p>This link will expire in 1 hour.</p>
  `;
  await sendEmail({
    to: email,
    subject: "Password Reset Request",
    html
  });
};

const forgotPassword_post = defineEventHandler(async (event) => {
  try {
    const { email } = await readBody(event);
    const user = await prisma$2.user.findUnique({
      where: { email }
    });
    if (!user) {
      throw createError({
        statusCode: 404,
        message: "User not found"
      });
    }
    const resetToken = generateToken({ userId: user.id }, "1h");
    await prisma$2.user.update({
      where: { id: user.id },
      data: {
        resetToken,
        resetTokenExpires: new Date(Date.now() + 36e5)
        // 1 hour from now
      }
    });
    await sendPasswordResetEmail(email, resetToken);
    return {
      message: "Password reset instructions have been sent to your email"
    };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Failed to process password reset request"
    });
  }
});

const forgotPassword_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: forgotPassword_post
});

const login_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { email, password } = body;
    if (!email || !password) {
      throw createError({
        statusCode: 400,
        message: "Email and password are required"
      });
    }
    const user = await prisma$2.user.findUnique({
      where: { email }
    });
    if (!user) {
      throw createError({
        statusCode: 401,
        message: "Invalid credentials"
      });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw createError({
        statusCode: 401,
        message: "Invalid credentials"
      });
    }
    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role
    });
    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
      }
    };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Error during login"
    });
  }
});

const login_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: login_post
});

const register_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { email, password, firstName, lastName } = body;
    if (!email || !password || !firstName || !lastName) {
      throw createError({
        statusCode: 400,
        message: "All fields are required"
      });
    }
    const existingUser = await prisma$2.user.findUnique({
      where: { email }
    });
    if (existingUser) {
      throw createError({
        statusCode: 400,
        message: "User already exists"
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma$2.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        role: "ADMIN"
        // Set role as ADMIN for admin users
      }
    });
    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
      }
    };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Error during registration"
    });
  }
});

const register_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: register_post
});

const resetPassword_post = defineEventHandler(async (event) => {
  try {
    const { token, password } = await readBody(event);
    const decoded = verifyToken(token);
    if (!decoded) {
      throw createError({
        statusCode: 400,
        message: "Invalid or expired reset token"
      });
    }
    const user = await prisma$2.user.findFirst({
      where: {
        id: decoded.userId,
        resetToken: token,
        resetTokenExpires: {
          gt: /* @__PURE__ */ new Date()
        }
      }
    });
    if (!user) {
      throw createError({
        statusCode: 400,
        message: "Invalid or expired reset token"
      });
    }
    const hashedPassword = await hash$1(password, 10);
    await prisma$2.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpires: null
      }
    });
    return {
      message: "Password has been reset successfully"
    };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Failed to reset password"
    });
  }
});

const resetPassword_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: resetPassword_post
});

const validate_get = defineEventHandler(async (event) => {
  try {
    const authHeader = getRequestHeader(event, "Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw createError({
        statusCode: 401,
        message: "No token provided"
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);
    if (!decoded) {
      throw createError({
        statusCode: 401,
        message: "Invalid token"
      });
    }
    const user = await prisma$2.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true
      }
    });
    if (!user) {
      throw createError({
        statusCode: 401,
        message: "User not found"
      });
    }
    return user;
  } catch (error) {
    throw createError({
      statusCode: 401,
      message: error.message || "Invalid token"
    });
  }
});

const validate_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: validate_get
});

const prisma = new PrismaClient();
const verifyAuth = async (event) => {
  try {
    const authHeader = getHeader(event, "authorization");
    if (!(authHeader == null ? void 0 : authHeader.startsWith("Bearer "))) {
      return null;
    }
    const token = authHeader.split(" ")[1];
    const config = useRuntimeConfig();
    const decoded = jwt.verify(token, config.jwtSecret);
    if (!(decoded == null ? void 0 : decoded.id)) {
      return null;
    }
    const user = await prisma.user.findUnique({
      where: { id: decoded.id }
    });
    if (!user || !user.isActive) {
      return null;
    }
    return user;
  } catch (error) {
    console.error("Auth verification error:", error);
    return null;
  }
};

const clear_post = defineEventHandler(async (event) => {
  try {
    const user = await verifyAuth(event);
    if (!user) {
      throw createError({
        statusCode: 401,
        message: "Unauthorized"
      });
    }
    await prisma$2.cartItem.deleteMany({
      where: {
        cart: {
          userId: user.id
        }
      }
    });
    return { success: true };
  } catch (error) {
    console.error("Error clearing cart:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const clear_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: clear_post
});

const index_get$c = defineEventHandler(async (event) => {
  try {
    const authHeader = getRequestHeader(event, "Authorization");
    if (!(authHeader == null ? void 0 : authHeader.startsWith("Bearer "))) {
      throw createError({
        statusCode: 401,
        message: "Unauthorized"
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = await verifyToken(token);
    if (!decoded) {
      throw createError({
        statusCode: 401,
        message: "Invalid token"
      });
    }
    const cart = await prisma$2.cart.findUnique({
      where: { userId: decoded.id },
      include: {
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                images: true,
                stock: true
              }
            }
          }
        }
      }
    });
    if (!cart) {
      return await prisma$2.cart.create({
        data: {
          userId: decoded.id,
          items: {
            create: []
          }
        },
        include: {
          items: {
            include: {
              product: {
                select: {
                  id: true,
                  name: true,
                  price: true,
                  images: true,
                  stock: true
                }
              }
            }
          }
        }
      });
    }
    return cart;
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const index_get$d = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get$c
});

const _id__delete$8 = defineEventHandler(async (event) => {
  var _a;
  try {
    const authHeader = getRequestHeader(event, "Authorization");
    if (!(authHeader == null ? void 0 : authHeader.startsWith("Bearer "))) {
      throw createError({
        statusCode: 401,
        message: "Unauthorized"
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = await verifyToken(token);
    if (!decoded) {
      throw createError({
        statusCode: 401,
        message: "Invalid token"
      });
    }
    const id = (_a = event.context.params) == null ? void 0 : _a.id;
    if (!id) {
      throw createError({
        statusCode: 400,
        message: "Cart item ID is required"
      });
    }
    const cartItem = await prisma$2.cartItem.findFirst({
      where: {
        id,
        cart: {
          userId: decoded.id
        }
      }
    });
    if (!cartItem) {
      throw createError({
        statusCode: 404,
        message: "Cart item not found"
      });
    }
    await prisma$2.cartItem.delete({
      where: { id }
    });
    return { message: "Cart item removed successfully" };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const _id__delete$9 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__delete$8
});

const updateQuantitySchema = z.object({
  quantity: z.number().min(1)
});
const _id__put$4 = defineEventHandler(async (event) => {
  var _a;
  try {
    const authHeader = getRequestHeader(event, "Authorization");
    if (!(authHeader == null ? void 0 : authHeader.startsWith("Bearer "))) {
      throw createError({
        statusCode: 401,
        message: "Unauthorized"
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = await verifyToken(token);
    if (!decoded) {
      throw createError({
        statusCode: 401,
        message: "Invalid token"
      });
    }
    const id = (_a = event.context.params) == null ? void 0 : _a.id;
    if (!id) {
      throw createError({
        statusCode: 400,
        message: "Cart item ID is required"
      });
    }
    const body = await readBody(event);
    const validatedData = updateQuantitySchema.parse(body);
    const cartItem = await prisma$2.cartItem.findFirst({
      where: {
        id,
        cart: {
          userId: decoded.id
        }
      },
      include: {
        product: true
      }
    });
    if (!cartItem) {
      throw createError({
        statusCode: 404,
        message: "Cart item not found"
      });
    }
    if (validatedData.quantity > cartItem.product.stock) {
      throw createError({
        statusCode: 400,
        message: "Not enough stock available"
      });
    }
    const updatedItem = await prisma$2.cartItem.update({
      where: { id },
      data: { quantity: validatedData.quantity },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            price: true,
            images: true,
            stock: true
          }
        }
      }
    });
    return updatedItem;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw createError({
        statusCode: 400,
        message: error.errors[0].message
      });
    }
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const _id__put$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__put$4
});

const addToCartSchema = z.object({
  productId: z.string(),
  quantity: z.number().min(1)
});
const index_post$a = defineEventHandler(async (event) => {
  try {
    const authHeader = getRequestHeader(event, "Authorization");
    if (!(authHeader == null ? void 0 : authHeader.startsWith("Bearer "))) {
      throw createError({
        statusCode: 401,
        message: "Unauthorized"
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = await verifyToken(token);
    if (!decoded) {
      throw createError({
        statusCode: 401,
        message: "Invalid token"
      });
    }
    const body = await readBody(event);
    const validatedData = addToCartSchema.parse(body);
    let cart = await prisma$2.cart.findUnique({
      where: { userId: decoded.id }
    });
    if (!cart) {
      cart = await prisma$2.cart.create({
        data: { userId: decoded.id }
      });
    }
    const product = await prisma$2.product.findUnique({
      where: { id: validatedData.productId }
    });
    if (!product) {
      throw createError({
        statusCode: 404,
        message: "Product not found"
      });
    }
    if (product.stock < validatedData.quantity) {
      throw createError({
        statusCode: 400,
        message: "Not enough stock available"
      });
    }
    const existingItem = await prisma$2.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId: validatedData.productId
      }
    });
    if (existingItem) {
      const newQuantity = existingItem.quantity + validatedData.quantity;
      if (newQuantity > product.stock) {
        throw createError({
          statusCode: 400,
          message: "Not enough stock available"
        });
      }
      const updatedItem = await prisma$2.cartItem.update({
        where: { id: existingItem.id },
        data: { quantity: newQuantity },
        include: {
          product: {
            select: {
              id: true,
              name: true,
              price: true,
              images: true,
              stock: true
            }
          }
        }
      });
      return updatedItem;
    }
    const newItem = await prisma$2.cartItem.create({
      data: {
        cartId: cart.id,
        productId: validatedData.productId,
        quantity: validatedData.quantity
      },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            price: true,
            images: true,
            stock: true
          }
        }
      }
    });
    return newItem;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw createError({
        statusCode: 400,
        message: error.errors[0].message
      });
    }
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const index_post$b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_post$a
});

const _id__delete$6 = defineEventHandler(async (event) => {
  var _a;
  try {
    const id = (_a = event.context.params) == null ? void 0 : _a.id;
    if (!id) {
      throw createError({
        statusCode: 400,
        message: "Category ID is required"
      });
    }
    const category = await prisma$2.category.findUnique({
      where: { id }
    });
    if (!category) {
      throw createError({
        statusCode: 404,
        message: "Category not found"
      });
    }
    const productsCount = await prisma$2.product.count({
      where: { categoryId: id }
    });
    if (productsCount > 0) {
      throw createError({
        statusCode: 400,
        message: "Cannot delete category because it has associated products. Please remove or reassign the products first."
      });
    }
    await prisma$2.category.delete({
      where: { id }
    });
    return { message: "Category deleted successfully" };
  } catch (error) {
    console.error("Error deleting category:", error);
    throw createError({
      statusCode: 500,
      message: error instanceof Error ? error.message : "Error deleting category"
    });
  }
});

const _id__delete$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__delete$6
});

const _id__get$4 = defineEventHandler(async (event) => {
  var _a;
  try {
    const id = (_a = event.context.params) == null ? void 0 : _a.id;
    if (!id) {
      throw createError({
        statusCode: 400,
        message: "Category ID is required"
      });
    }
    const category = await prisma$2.category.findUnique({
      where: { id }
    });
    if (!category) {
      throw createError({
        statusCode: 404,
        message: "Category not found"
      });
    }
    return category;
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Error fetching category"
    });
  }
});

const _id__get$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__get$4
});

const _id__put$2 = defineEventHandler(async (event) => {
  var _a;
  try {
    const id = (_a = event.context.params) == null ? void 0 : _a.id;
    if (!id) {
      throw createError({
        statusCode: 400,
        message: "Category ID is required"
      });
    }
    const body = await readBody(event);
    const { name, description } = body;
    if (!name) {
      throw createError({
        statusCode: 400,
        message: "Category name is required"
      });
    }
    const category = await prisma$2.category.update({
      where: { id },
      data: {
        name,
        description
      }
    });
    return category;
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Error updating category"
    });
  }
});

const _id__put$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__put$2
});

const index_get$a = defineEventHandler(async (event) => {
  try {
    const categories = await prisma$2.category.findMany();
    return categories;
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Error fetching categories"
    });
  }
});

const index_get$b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get$a
});

const index_post$8 = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { name, description } = body;
    if (!name) {
      throw createError({
        statusCode: 400,
        message: "Category name is required"
      });
    }
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const category = await prisma$2.category.create({
      data: {
        name,
        slug,
        description
      }
    });
    return category;
  } catch (error) {
    console.error("Error creating category:", error);
    throw createError({
      statusCode: 500,
      message: error instanceof Error ? error.message : "Error creating category"
    });
  }
});

const index_post$9 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_post$8
});

const _id__get$2 = defineEventHandler(async (event) => {
  var _a;
  try {
    const authHeader = getRequestHeader(event, "Authorization");
    if (!authHeader) {
      throw createError({
        statusCode: 401,
        message: "No authorization header"
      });
    }
    if (!authHeader.startsWith("Bearer ")) {
      throw createError({
        statusCode: 401,
        message: "Invalid authorization format"
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);
    if (!decoded) {
      throw createError({
        statusCode: 401,
        message: "Invalid token"
      });
    }
    const orderId = (_a = event.context.params) == null ? void 0 : _a.id;
    const order = await prisma$2.order.findUnique({
      where: { id: orderId },
      include: {
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                images: true
              }
            }
          }
        },
        shippingAddress: true,
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true
          }
        }
      }
    });
    if (!order) {
      throw createError({
        statusCode: 404,
        message: "Order not found"
      });
    }
    if (decoded.role !== "ADMIN" && order.userId !== decoded.id) {
      throw createError({
        statusCode: 403,
        message: "Not authorized to view this order"
      });
    }
    return order;
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const _id__get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__get$2
});

const ORDER_STATUS_FLOW = {
  PENDING: ["PROCESSING", "CANCELLED"],
  PROCESSING: ["SHIPPED", "CANCELLED"],
  SHIPPED: ["DELIVERED", "CANCELLED"],
  DELIVERED: [],
  CANCELLED: []
};
const _id__patch = defineEventHandler(async (event) => {
  var _a;
  try {
    const authHeader = getRequestHeader(event, "Authorization");
    if (!authHeader) {
      throw createError({
        statusCode: 401,
        message: "No authorization header"
      });
    }
    if (!authHeader.startsWith("Bearer ")) {
      throw createError({
        statusCode: 401,
        message: "Invalid authorization format"
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);
    if (!decoded) {
      throw createError({
        statusCode: 401,
        message: "Invalid token"
      });
    }
    if (decoded.role !== "ADMIN") {
      throw createError({
        statusCode: 403,
        message: "Only admins can update orders"
      });
    }
    const orderId = (_a = event.context.params) == null ? void 0 : _a.id;
    const body = await readBody(event);
    const validStatuses = ["PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"];
    if (!body.status || !validStatuses.includes(body.status)) {
      throw createError({
        statusCode: 400,
        message: "Invalid status"
      });
    }
    const currentOrder = await prisma$2.order.findUnique({
      where: { id: orderId },
      select: { status: true }
    });
    if (!currentOrder) {
      throw createError({
        statusCode: 404,
        message: "Order not found"
      });
    }
    const allowedTransitions = ORDER_STATUS_FLOW[currentOrder.status];
    if (!allowedTransitions.includes(body.status)) {
      throw createError({
        statusCode: 400,
        message: `Cannot change status from ${currentOrder.status} to ${body.status}. Allowed transitions: ${allowedTransitions.join(", ")}`
      });
    }
    const order = await prisma$2.order.update({
      where: { id: orderId },
      data: { status: body.status },
      include: {
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                images: true
              }
            }
          }
        },
        shippingAddress: true,
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true
          }
        }
      }
    });
    return order;
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const _id__patch$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__patch
});

const index_get$8 = defineEventHandler(async (event) => {
  try {
    const authHeader = getRequestHeader(event, "Authorization");
    console.log("Auth header in /api/orders:", authHeader);
    if (!authHeader) {
      console.log("No auth header found");
      throw createError({
        statusCode: 401,
        message: "No authorization header"
      });
    }
    if (!authHeader.startsWith("Bearer ")) {
      console.log("Auth header does not start with Bearer:", authHeader);
      throw createError({
        statusCode: 401,
        message: "Invalid authorization format"
      });
    }
    const token = authHeader.split(" ")[1];
    console.log("Token extracted in /api/orders:", token);
    const decoded = verifyToken(token);
    console.log("Token decoded in /api/orders:", decoded);
    if (!decoded) {
      console.log("Token verification failed");
      throw createError({
        statusCode: 401,
        message: "Invalid token"
      });
    }
    const orders = await prisma$2.order.findMany({
      where: decoded.role === "ADMIN" ? {} : { userId: decoded.id },
      include: {
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                images: true,
                slug: true
              }
            }
          }
        },
        shippingAddress: true,
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true
          }
        }
      },
      orderBy: { createdAt: "desc" }
    });
    console.log("Orders found:", orders.length);
    return orders;
  } catch (error) {
    console.error("Error in /api/orders:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const index_get$9 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get$8
});

const createOrderSchema = z.object({
  shippingAddressId: z.string(),
  paymentMethod: z.enum(["credit_card", "paypal", "bank_transfer"])
});
const index_post$6 = defineEventHandler(async (event) => {
  try {
    const authHeader = getRequestHeader(event, "Authorization");
    if (!(authHeader == null ? void 0 : authHeader.startsWith("Bearer "))) {
      throw createError({
        statusCode: 401,
        message: "Unauthorized"
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = await verifyToken(token);
    if (!decoded) {
      throw createError({
        statusCode: 401,
        message: "Invalid token"
      });
    }
    const body = await readBody(event);
    const validatedData = createOrderSchema.parse(body);
    const cart = await prisma$2.cart.findUnique({
      where: { userId: decoded.id },
      include: {
        items: {
          include: {
            product: true
          }
        }
      }
    });
    if (!cart || cart.items.length === 0) {
      throw createError({
        statusCode: 400,
        message: "Cart is empty"
      });
    }
    const shippingAddress = await prisma$2.address.findFirst({
      where: {
        id: validatedData.shippingAddressId,
        userId: decoded.id
      }
    });
    if (!shippingAddress) {
      throw createError({
        statusCode: 404,
        message: "Shipping address not found"
      });
    }
    let total = 0;
    for (const item of cart.items) {
      if (item.quantity > item.product.stock) {
        throw createError({
          statusCode: 400,
          message: `Not enough stock for ${item.product.name}`
        });
      }
      total += item.product.price * item.quantity;
    }
    const order = await prisma$2.$transaction(async (tx) => {
      const order2 = await tx.order.create({
        data: {
          userId: decoded.id,
          total,
          status: OrderStatus.PENDING,
          paymentMethod: validatedData.paymentMethod,
          shippingAddressId: validatedData.shippingAddressId,
          items: {
            create: cart.items.map((item) => ({
              productId: item.productId,
              quantity: item.quantity,
              price: item.product.price
            }))
          }
        }
      });
      for (const item of cart.items) {
        await tx.product.update({
          where: { id: item.productId },
          data: {
            stock: {
              decrement: item.quantity
            }
          }
        });
      }
      await tx.cartItem.deleteMany({
        where: { cartId: cart.id }
      });
      return order2;
    });
    return order;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw createError({
        statusCode: 400,
        message: error.errors[0].message
      });
    }
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const index_post$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_post$6
});

const _id__get = defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();
    const stripe = new Stripe(config.stripeSecretKey, {
      apiVersion: "2025-04-30.basil"
    });
    const user = await verifyAuth(event);
    if (!user) {
      throw createError({
        statusCode: 401,
        message: "Unauthorized"
      });
    }
    const id = getRouterParam(event, "id");
    if (!id) {
      throw createError({
        statusCode: 400,
        message: "Payment intent ID is required"
      });
    }
    const paymentIntent = await stripe.paymentIntents.retrieve(id);
    if (paymentIntent.metadata.userId !== user.id) {
      throw createError({
        statusCode: 403,
        message: "Forbidden"
      });
    }
    return paymentIntent;
  } catch (error) {
    console.error("Error retrieving payment intent:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const _id__get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__get
});

const createIntent_post = defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();
    const stripe = new Stripe(config.stripeSecretKey, {
      apiVersion: "2025-04-30.basil"
    });
    const user = await verifyAuth(event);
    if (!user) {
      throw createError({
        statusCode: 401,
        message: "Unauthorized"
      });
    }
    const body = await readBody(event);
    const { amount, currency = "usd" } = body;
    if (!amount || amount <= 0) {
      throw createError({
        statusCode: 400,
        message: "Invalid amount"
      });
    }
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      // Convert to cents
      currency,
      automatic_payment_methods: {
        enabled: true
      },
      metadata: {
        userId: user.id
      }
    });
    return {
      clientSecret: paymentIntent.client_secret
    };
  } catch (error) {
    console.error("Error creating payment intent:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const createIntent_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: createIntent_post
});

const _slug__delete = defineEventHandler(async (event) => {
  var _a;
  try {
    const slug = (_a = event.context.params) == null ? void 0 : _a.id;
    if (!slug) {
      throw createError({
        statusCode: 400,
        message: "Product slug is required"
      });
    }
    const product = await prisma$2.product.findUnique({
      where: { slug }
    });
    if (!product) {
      throw createError({
        statusCode: 404,
        message: "Product not found"
      });
    }
    await prisma$2.product.delete({
      where: { slug }
    });
    return { message: "Product deleted successfully" };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Error deleting product"
    });
  }
});

const _slug__delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _slug__delete
});

const _slug__get = defineEventHandler(async (event) => {
  var _a;
  try {
    const slug = (_a = event.context.params) == null ? void 0 : _a.slug;
    if (!slug) {
      throw createError({
        statusCode: 400,
        message: "Product slug is required"
      });
    }
    const product = await prisma$2.product.findUnique({
      where: { slug },
      include: { category: true }
    });
    if (!product) {
      throw createError({
        statusCode: 404,
        message: "Product not found"
      });
    }
    return product;
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Error fetching product"
    });
  }
});

const _slug__get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _slug__get
});

const _slug__put = defineEventHandler(async (event) => {
  var _a;
  try {
    const slug = (_a = event.context.params) == null ? void 0 : _a.id;
    if (!slug) {
      throw createError({
        statusCode: 400,
        message: "Product slug is required"
      });
    }
    const body = await readBody(event);
    const { name, description, price, stock, categoryId, images, specifications } = body;
    if (!name || !description || !price || stock === void 0 || !categoryId) {
      throw createError({
        statusCode: 400,
        message: "Missing required fields"
      });
    }
    const product = await prisma$2.product.findUnique({
      where: { slug }
    });
    if (!product) {
      throw createError({
        statusCode: 404,
        message: "Product not found"
      });
    }
    const updatedProduct = await prisma$2.product.update({
      where: { slug },
      data: {
        name,
        description,
        price,
        stock,
        categoryId,
        images,
        specifications
      },
      include: { category: true }
    });
    return updatedProduct;
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Error updating product"
    });
  }
});

const _slug__put$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _slug__put
});

const index_get$6 = defineEventHandler(async (event) => {
  try {
    const query = getQuery$1(event);
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 12;
    const skip = (page - 1) * limit;
    const search = query.search;
    const category = query.category;
    const minPrice = query.minPrice ? Number(query.minPrice) : void 0;
    const maxPrice = query.maxPrice ? Number(query.maxPrice) : void 0;
    const where = {
      AND: [
        search ? {
          OR: [
            { name: { contains: search, mode: "insensitive" } },
            { description: { contains: search, mode: "insensitive" } }
          ]
        } : {},
        category ? { categoryId: category } : {},
        {
          AND: [
            minPrice ? { price: { gte: minPrice } } : {},
            maxPrice ? { price: { lte: maxPrice } } : {}
          ]
        }
      ]
    };
    const [products, total] = await Promise.all([
      prisma$2.product.findMany({
        where,
        include: { category: true },
        skip,
        take: limit,
        orderBy: { createdAt: "desc" }
      }),
      prisma$2.product.count({ where })
    ]);
    return {
      products,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Error fetching products"
    });
  }
});

const index_get$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get$6
});

const index_post$4 = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { name, description, price, stock, categoryId, images, specifications } = body;
    if (!name || !description || !price || !stock || !categoryId) {
      throw createError({
        statusCode: 400,
        message: "Missing required fields"
      });
    }
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const product = await prisma$2.product.create({
      data: {
        name,
        slug,
        description,
        price,
        stock,
        categoryId,
        images,
        specifications
      },
      include: { category: true }
    });
    return product;
  } catch (error) {
    console.error("Error creating product:", error);
    throw createError({
      statusCode: 500,
      message: "Error creating product"
    });
  }
});

const index_post$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_post$4
});

const index_get$4 = defineEventHandler(async (event) => {
  try {
    const settings = await prisma$2.storeSettings.findMany();
    if (settings.length === 0) {
      await prisma$2.storeSettings.create({
        data: {
          key: "defaultCurrency",
          value: "EUR"
        }
      });
      return { defaultCurrency: "EUR" };
    }
    return settings.reduce((acc, setting) => {
      acc[setting.key] = setting.value;
      return acc;
    }, {});
  } catch (error) {
    console.error("Error fetching store settings:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to fetch store settings"
    });
  }
});

const index_get$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get$4
});

const index_put = defineEventHandler(async (event) => {
  try {
    const authHeader = getRequestHeader(event, "Authorization");
    if (!(authHeader == null ? void 0 : authHeader.startsWith("Bearer "))) {
      throw createError({
        statusCode: 401,
        message: "Unauthorized"
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = await verifyToken(token);
    if (!decoded || decoded.role !== "ADMIN") {
      throw createError({
        statusCode: 403,
        message: "Forbidden"
      });
    }
    const body = await readBody(event);
    const settings = body;
    await Promise.all(
      Object.entries(settings).map(async ([key, value]) => {
        await prisma$2.storeSettings.upsert({
          where: { key },
          update: { value },
          create: { key, value }
        });
      })
    );
    return { message: "Settings updated successfully" };
  } catch (error) {
    console.error("Error updating store settings:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Failed to update store settings"
    });
  }
});

const index_put$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_put
});

const _id__delete$4 = defineEventHandler(async (event) => {
  var _a;
  try {
    const id = (_a = event.context.params) == null ? void 0 : _a.id;
    const existingUser = await prisma$2.user.findUnique({
      where: { id }
    });
    if (!existingUser) {
      throw createError({
        statusCode: 404,
        message: "User not found"
      });
    }
    await prisma$2.user.delete({
      where: { id }
    });
    return { message: "User deleted successfully" };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Error deleting user"
    });
  }
});

const _id__delete$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__delete$4
});

const _id__put = defineEventHandler(async (event) => {
  var _a;
  try {
    const id = (_a = event.context.params) == null ? void 0 : _a.id;
    const body = await readBody(event);
    const { email, password, firstName, lastName, role } = body;
    if (!email || !firstName || !lastName) {
      throw createError({
        statusCode: 400,
        message: "Missing required fields"
      });
    }
    const existingUser = await prisma$2.user.findUnique({
      where: { id }
    });
    if (!existingUser) {
      throw createError({
        statusCode: 404,
        message: "User not found"
      });
    }
    const emailExists = await prisma$2.user.findFirst({
      where: {
        email,
        id: { not: id }
      }
    });
    if (emailExists) {
      throw createError({
        statusCode: 400,
        message: "Email already taken"
      });
    }
    const updateData = {
      email,
      firstName,
      lastName,
      role
    };
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }
    const user = await prisma$2.user.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        createdAt: true,
        updatedAt: true
      }
    });
    return user;
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Error updating user"
    });
  }
});

const _id__put$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__put
});

const toggle_post = defineEventHandler(async (event) => {
  var _a;
  try {
    const id = (_a = event.context.params) == null ? void 0 : _a.id;
    const existingUser = await prisma$2.user.findUnique({
      where: { id }
    });
    if (!existingUser) {
      throw createError({
        statusCode: 404,
        message: "User not found"
      });
    }
    const user = await prisma$2.user.update({
      where: { id },
      data: {
        isActive: !existingUser.isActive
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true
      }
    });
    return user;
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Error toggling user status"
    });
  }
});

const toggle_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: toggle_post
});

const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z.string().min(8, "Password must be at least 8 characters long")
});
const changePassword_post = defineEventHandler(async (event) => {
  try {
    const authHeader = getRequestHeader(event, "Authorization");
    if (!(authHeader == null ? void 0 : authHeader.startsWith("Bearer "))) {
      throw createError({
        statusCode: 401,
        message: "Unauthorized"
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = await verifyToken(token);
    if (!decoded) {
      throw createError({
        statusCode: 401,
        message: "Invalid token"
      });
    }
    const body = await readBody(event);
    const validatedData = changePasswordSchema.parse(body);
    const user = await prisma$2.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        password: true
      }
    });
    if (!user) {
      throw createError({
        statusCode: 404,
        message: "User not found"
      });
    }
    const isValidPassword = await bcrypt.compare(validatedData.currentPassword, user.password);
    if (!isValidPassword) {
      throw createError({
        statusCode: 400,
        message: "Current password is incorrect"
      });
    }
    const hashedPassword = await bcrypt.hash(validatedData.newPassword, 10);
    await prisma$2.user.update({
      where: { id: user.id },
      data: { password: hashedPassword }
    });
    return { message: "Password updated successfully" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw createError({
        statusCode: 400,
        message: error.errors[0].message
      });
    }
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const changePassword_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: changePassword_post
});

const index_get$2 = defineEventHandler(async (event) => {
  try {
    const users = await prisma$2.user.findMany({
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true
      }
    });
    return users;
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Error fetching users"
    });
  }
});

const index_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get$2
});

const index_post$2 = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { email, password, firstName, lastName, role } = body;
    if (!email || !password || !firstName || !lastName) {
      throw createError({
        statusCode: 400,
        message: "Missing required fields"
      });
    }
    const existingUser = await prisma$2.user.findUnique({
      where: { email }
    });
    if (existingUser) {
      throw createError({
        statusCode: 400,
        message: "User already exists"
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma$2.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        role: role || "USER"
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        createdAt: true,
        updatedAt: true
      }
    });
    return user;
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Error creating user"
    });
  }
});

const index_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_post$2
});

const me_get = defineEventHandler(async (event) => {
  try {
    const authHeader = getRequestHeader(event, "Authorization");
    console.log("Auth header in /api/users/me:", authHeader);
    if (!authHeader) {
      console.log("No auth header found");
      throw createError({
        statusCode: 401,
        message: "No authorization header"
      });
    }
    if (!authHeader.startsWith("Bearer ")) {
      console.log("Auth header does not start with Bearer:", authHeader);
      throw createError({
        statusCode: 401,
        message: "Invalid authorization format"
      });
    }
    const token = authHeader.split(" ")[1];
    console.log("Token extracted in /api/users/me:", token);
    const decoded = verifyToken(token);
    console.log("Token decoded in /api/users/me:", decoded);
    if (!decoded) {
      console.log("Token verification failed");
      throw createError({
        statusCode: 401,
        message: "Invalid token"
      });
    }
    const user = await prisma$2.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        role: true,
        isActive: true
      }
    });
    if (!user) {
      console.log("User not found in database:", decoded.id);
      throw createError({
        statusCode: 404,
        message: "User not found"
      });
    }
    if (!user.isActive) {
      console.log("User account is inactive:", decoded.id);
      throw createError({
        statusCode: 401,
        message: "User account is inactive"
      });
    }
    console.log("User found and active:", user);
    return user;
  } catch (error) {
    console.error("Error in /api/users/me:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const me_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: me_get
});

const updateProfileSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional()
});
const me_put = defineEventHandler(async (event) => {
  try {
    const authHeader = getRequestHeader(event, "Authorization");
    if (!(authHeader == null ? void 0 : authHeader.startsWith("Bearer "))) {
      throw createError({
        statusCode: 401,
        message: "Unauthorized"
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = await verifyToken(token);
    const currentUser = await prisma$2.user.findUnique({
      where: { id: decoded.id },
      select: { email: true }
    });
    if (!currentUser) {
      throw createError({
        statusCode: 404,
        message: "User not found"
      });
    }
    const body = await readBody(event);
    const validatedData = updateProfileSchema.parse(body);
    if (validatedData.email !== currentUser.email) {
      const existingUser = await prisma$2.user.findFirst({
        where: {
          email: validatedData.email,
          id: { not: decoded.id }
        }
      });
      if (existingUser) {
        throw createError({
          statusCode: 400,
          message: "Email is already taken"
        });
      }
    }
    const updatedUser = await prisma$2.user.update({
      where: { id: decoded.id },
      data: validatedData,
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        role: true,
        isActive: true
      }
    });
    return updatedUser;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw createError({
        statusCode: 400,
        message: error.errors[0].message
      });
    }
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const me_put$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: me_put
});

const _id__delete$2 = defineEventHandler(async (event) => {
  var _a;
  try {
    const authHeader = getRequestHeader(event, "Authorization");
    if (!(authHeader == null ? void 0 : authHeader.startsWith("Bearer "))) {
      throw createError({
        statusCode: 401,
        message: "Unauthorized"
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = await verifyToken(token);
    const id = (_a = event.context.params) == null ? void 0 : _a.id;
    if (!id) {
      throw createError({
        statusCode: 400,
        message: "Wishlist item ID is required"
      });
    }
    const existingItem = await prisma$2.wishlistItem.findFirst({
      where: {
        id,
        userId: decoded.userId
      }
    });
    if (!existingItem) {
      throw createError({
        statusCode: 404,
        message: "Wishlist item not found"
      });
    }
    await prisma$2.wishlistItem.delete({
      where: { id }
    });
    return { message: "Item removed from wishlist" };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const _id__delete$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__delete$2
});

const index_get = defineEventHandler(async (event) => {
  try {
    const authHeader = getRequestHeader(event, "Authorization");
    if (!(authHeader == null ? void 0 : authHeader.startsWith("Bearer "))) {
      throw createError({
        statusCode: 401,
        message: "Unauthorized"
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = await verifyToken(token);
    if (!decoded) {
      throw createError({
        statusCode: 401,
        message: "Invalid token"
      });
    }
    const wishlist = await prisma$2.wishlist.findUnique({
      where: { userId: decoded.id },
      include: {
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                images: true,
                stock: true,
                slug: true
              }
            }
          }
        }
      }
    });
    if (!wishlist) {
      return await prisma$2.wishlist.create({
        data: {
          userId: decoded.id,
          items: {
            create: []
          }
        },
        include: {
          items: {
            include: {
              product: {
                select: {
                  id: true,
                  name: true,
                  price: true,
                  images: true,
                  stock: true,
                  slug: true
                }
              }
            }
          }
        }
      });
    }
    return wishlist;
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const index_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get
});

const _id__delete = defineEventHandler(async (event) => {
  var _a;
  try {
    const authHeader = getRequestHeader(event, "Authorization");
    if (!(authHeader == null ? void 0 : authHeader.startsWith("Bearer "))) {
      throw createError({
        statusCode: 401,
        message: "Unauthorized"
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = await verifyToken(token);
    if (!decoded) {
      throw createError({
        statusCode: 401,
        message: "Invalid token"
      });
    }
    const id = (_a = event.context.params) == null ? void 0 : _a.id;
    if (!id) {
      throw createError({
        statusCode: 400,
        message: "Wishlist item ID is required"
      });
    }
    const wishlistItem = await prisma$2.wishlistItem.findFirst({
      where: {
        id,
        wishlist: {
          userId: decoded.id
        }
      }
    });
    if (!wishlistItem) {
      throw createError({
        statusCode: 404,
        message: "Wishlist item not found"
      });
    }
    await prisma$2.wishlistItem.delete({
      where: { id }
    });
    return { message: "Wishlist item removed successfully" };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const _id__delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__delete
});

const addToWishlistSchema = z.object({
  productId: z.string()
});
const index_post = defineEventHandler(async (event) => {
  try {
    const authHeader = getRequestHeader(event, "Authorization");
    if (!(authHeader == null ? void 0 : authHeader.startsWith("Bearer "))) {
      throw createError({
        statusCode: 401,
        message: "Unauthorized"
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = await verifyToken(token);
    if (!decoded) {
      throw createError({
        statusCode: 401,
        message: "Invalid token"
      });
    }
    const body = await readBody(event);
    const validatedData = addToWishlistSchema.parse(body);
    let wishlist = await prisma$2.wishlist.findUnique({
      where: { userId: decoded.id }
    });
    if (!wishlist) {
      wishlist = await prisma$2.wishlist.create({
        data: { userId: decoded.id }
      });
    }
    const product = await prisma$2.product.findUnique({
      where: { id: validatedData.productId }
    });
    if (!product) {
      throw createError({
        statusCode: 404,
        message: "Product not found"
      });
    }
    const existingItem = await prisma$2.wishlistItem.findFirst({
      where: {
        wishlistId: wishlist.id,
        productId: validatedData.productId
      }
    });
    if (existingItem) {
      throw createError({
        statusCode: 400,
        message: "Product already in wishlist"
      });
    }
    const newItem = await prisma$2.wishlistItem.create({
      data: {
        wishlistId: wishlist.id,
        productId: validatedData.productId
      },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            price: true,
            images: true,
            stock: true,
            slug: true
          }
        }
      }
    });
    return newItem;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw createError({
        statusCode: 400,
        message: error.errors[0].message
      });
    }
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const index_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_post
});

function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "innerHTML": contents,
    "data-nuxt-data": appId,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  {
    payload.id = "__NUXT_DATA__";
  }
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  const config = uneval(opts.ssrContext.config);
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderSSRHeadOptions = {"omitLineBreaks":false};

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const ssrContext = createSSRContext(event);
  const headEntryOptions = { mode: "server" };
  ssrContext.head.push(appHead, headEntryOptions);
  if (ssrError) {
    ssrError.statusCode &&= Number.parseInt(ssrError.statusCode);
    setSSRError(ssrContext, ssrError);
  }
  const isRenderingPayload = PAYLOAD_URL_RE.test(ssrContext.url);
  if (isRenderingPayload) {
    const url = ssrContext.url.substring(0, ssrContext.url.lastIndexOf("/")) || "/";
    ssrContext.url = url;
    event._path = event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  if (routeOptions.ssr === false) {
    ssrContext.noSSR = true;
  }
  const renderer = await getRenderer(ssrContext);
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  const inlinedStyles = [];
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response = renderPayloadResponse(ssrContext);
    return response;
  }
  const NO_SCRIPTS = routeOptions.noScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (ssrContext._preloadManifest && !NO_SCRIPTS) {
    ssrContext.head.push({
      link: [
        { rel: "preload", as: "fetch", fetchpriority: "low", crossorigin: "anonymous", href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`) }
      ]
    }, { ...headEntryOptions, tagPriority: "low" });
  }
  if (inlinedStyles.length) {
    ssrContext.head.push({ style: inlinedStyles });
  }
  const link = [];
  for (const resource of Object.values(styles)) {
    if ("inline" in getQuery(resource.file)) {
      continue;
    }
    link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
  }
  if (link.length) {
    ssrContext.head.push({ link }, headEntryOptions);
  }
  if (!NO_SCRIPTS) {
    ssrContext.head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      script: renderPayloadJsonScript({ ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.noScripts) {
    ssrContext.head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition: "head",
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
  const htmlContext = {
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  return {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
});
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});
//# sourceMappingURL=index.mjs.map
